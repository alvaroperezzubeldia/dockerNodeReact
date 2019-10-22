import React from 'react';
import './ListForms.scss';
import { useHistory } from "react-router-dom";
import { FormResponse } from '../../types/types';

const forms: FormResponse[] = [{
  id: 1,
  text: 'Question 1',
  answer: 'Response 1',
  stars: 4.5
},{
  id: 2,
  text: 'Question 2',
  answer: 'Response 2',
  stars: 3
}]

function ListForms() {
  let history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value);
    history.push("/users/form/" + event.currentTarget.value);
  }

  return (
    <div className="App">
      <div className="container mt-5">
        {
          (forms.map(form => { return(
            <div className="card mt-3" key={form.id}>
              <div className="card-body">
                <h5 className="card-title">{form.text}</h5>
                <button type="button" className="btn btn-primary" onClick={handleClick} value={form.id}>View</button>
              </div>
            </div>
          )}))
        }
      </div>
    </div>
  );
}

export default ListForms;
