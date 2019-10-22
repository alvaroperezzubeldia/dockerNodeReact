import React from 'react';
import './NewForm.scss';
import { QuestionI } from '../../types/types';

interface Props extends QuestionI{
  updateQuestion: (id: number, text: string) => void
}

export default function formEntry(props: Props){
  return (
    <div className="form-group question-form">
      <label>Question {props.id} title</label>
      <textarea 
        className={`form-control ${props.error ? 'error': ''}`} 
        name="questionName" 
        id="questionName" 
        onChange={e => props.updateQuestion(props.id, e.target.value)}
        value={props.text}
      ></textarea>
      {props.error &&
        <div className="alert alert-danger text-center mt-3" role="alert">
          Min. 4 characters
        </div>
      }
    </div>
  )
}