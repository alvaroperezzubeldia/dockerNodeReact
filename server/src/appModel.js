'user strict';
var sql = require('./db.js');

//Question object constructor
var Question = function(question){
    this.question = question.question;
    this.status = question.status;
    this.created_at = new Date();
};
Question.createQuestion = function (newQuestion, result) {    
        sql.query("INSERT INTO questions set ?", newQuestion, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Question.getQuestionById = function (questionId, result) {
        sql.query("Select question from questions where id = ? ", questionId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Question.getAllQuestion = function (result) {
        sql.query("Select * from questions", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('questions : ', res);  

                 result(null, res);
                }
            });   
};
Question.updateById = function(id, question, result){
  sql.query("UPDATE questions SET question = ? WHERE id = ?", [question.question, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Question.remove = function(id, result){
     sql.query("DELETE FROM questions WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Question;