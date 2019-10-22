import React from 'react';
import './AddResponse';
import { FormResponse } from '../../types/types';

interface Props extends FormResponse{
  updateResponseText: (id: number, text: string) => void
  updateResponseStars: (id: number, stars: number) => void
}

export default function FormAnswer(props: Props){
  return (
    <div className="form-group question-form">
      <label>{props.id}. {props.text}</label>
      <textarea 
        className={`form-control ${props.error ? 'error': ''}`} 
        name="answerText" 
        id="answerText" 
        onChange={e => props.updateResponseText(props.id, e.target.value)}
      ></textarea>
      {props.error &&
        <div className="alert alert-danger text-center mt-3" role="alert">
          Min. 4 characters
        </div>
      }
    </div>
  )
}