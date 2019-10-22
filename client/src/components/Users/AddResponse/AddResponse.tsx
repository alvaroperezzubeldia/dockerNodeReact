import React, { useState } from 'react';
import './AddResponse.scss';
import FormAnswer from './FormAnswer';
import { FormResponse } from '../../types/types';

const forms: FormResponse[] = [{
  id: 1,
  text: 'Question 1',
  answer: '',
  stars: 4.5
},{
  id: 2,
  text: 'Question 2',
  answer: '',
  stars: 3
}]

function AddResponse(props: any) {
  const [responses, setResponses] = useState<FormResponse[]>(forms);
  const [loading, setLoading] = useState(false);
  let errors: number = 0;

  const updateResponseStars = (id: number, value: number) => {
    const newQuestion = responses.map(a => {
      if(a.id === id){
        return validateAnswer(Object.assign(a, {stars: value}));
      }else{
        return a;
      }
    })
    setResponses(newQuestion);
  }

  const updateResponseText = (id: number, value: string) => {
    const newResponses = responses.map(a => {
      if(a.id === id){
        return validateAnswer(Object.assign(a, {answer: value}));
      }else{
        return a;
      }
    })
    setResponses(newResponses);
  }

  const validateAnswer = (a: FormResponse) => {
    if(a.answer.length > 3){
      return Object.assign(a, {error: false});
    }else{
      errors += 1;
      return Object.assign(a, {error: true});
    }
  }

  const handleSubmit = (event: React.FormEvent<Element>) => {
    event.preventDefault();
    errors = 0;
    const newAnswers = responses.map(a => validateAnswer(a));
    if(errors > 0){
      setResponses(newAnswers);
    }else{
      setResponses([]);
      submitForm();
    }
  }

  const submitForm = () => {
    setLoading(true);
    fetch("http://localhost:4000/save-form'",{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(responses)})
        .then(resp => resp.json())
        .then(data => setResponses(data));
      setLoading(false);
  }

  return (
    <div className="App">
      <div className="container mt-5">
          <form onSubmit={handleSubmit} name="formCreate">
            {
              (forms.map(form => { return(
                <FormAnswer 
                  key={form.id.toString()}
                  id={form.id}
                  text={form.text}
                  answer={form.answer}
                  stars={form.stars}
                  error={form.error}
                  updateResponseStars={updateResponseStars}
                  updateResponseText={updateResponseText}
                />
              )}))
            }
          <div className="d-flex justify-content-end">
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

export default AddResponse;
