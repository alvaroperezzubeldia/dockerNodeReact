import React, { useState, useEffect } from 'react';
import FormEntry from './FormEntry';
import './NewForm.scss';
import { QuestionI } from '../../types/types';

const initQuestion = [{id: 1, text: '', error: false}]

function NewForm() {
  
  const [questions, setQuestions] = useState<QuestionI[]>(initQuestion);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  let errors: number = 0;

  const validateQuestion = (q: QuestionI) => {
    if(q.text.length > 3){
      return Object.assign(q, {error: false});
    }else{
      errors += 1;
      return Object.assign(q, {error: true});
    }
  }

  const updateQuestion = (id: number, value: string) => {
    const newQuestion = questions.map(q => {
      if(q.id === id){
        return validateQuestion({id: id, text: value});
      }else{
        return q;
      }
    })
    setQuestions(newQuestion);
  }

  const handleSubmit = (event: React.FormEvent<Element>) => {
    event.preventDefault();
    errors = 0;
    const newQuestions = questions.map(q => validateQuestion(q));
    if(errors > 0){
      setQuestions(newQuestions);
    }else{
      setQuestions(initQuestion);
      //submitForm();
      callApi().then( (response) => console.log(response)) ;
    }
  }

  const submitForm = () => {
    setLoading(true);
    fetch("http://localhost:4000/create-form'",{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(questions)})
        .then(resp => resp.json())
        .then(data => setResponse(data));
      setLoading(false);
  }

  const callApi = async () => {
    const resp = await fetch('/questions');

    let text = await resp.text();

    let data = null;
    try {
      data = JSON.parse(text); 
    } catch (e) {
      console.log(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  };

  const callApi2 = async () => {
    const resp = await fetch('/questions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: "aa",
        status: 1,
      }),
    })
    let text = await resp.text()

    let data = null;
    try {
      data = JSON.parse(text); 
    } catch (e) {
      console.log(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
    
  };

  const addForm = () => {
    setQuestions([...questions, {id: questions.length + 1, text: ''}]);
  }
  
  return (
    <div className="App">
      <div className="container mt-5">
        <form onSubmit={handleSubmit} name="formCreate">
          {
            (questions.map(q => { return(
              <FormEntry 
                key={q.id.toString()}
                id={q.id}
                text={q.text}
                error={q.error}
                updateQuestion={updateQuestion}
              />
            )}))
          }
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-secondary mt-3" onClick={addForm}>Add question</button>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </div>
        </form>
      </div>
      { loading && (
          <div className="loading"></div>
        )
      }
    </div>
  );
}

export default NewForm;
