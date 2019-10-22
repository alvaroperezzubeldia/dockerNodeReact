import React from 'react';
import './Results.scss';
import { useHistory } from "react-router-dom";

function Results() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/admin/create");
  }

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="alert alert-secondary text-center" role="alert">
          No forms created
        </div>
        <div className="text-right">
          <button type="button" className="btn btn-primary mt-3" onClick={handleClick}>Create form</button>
        </div>
      </div>
    </div>
  );
}

export default Results;
