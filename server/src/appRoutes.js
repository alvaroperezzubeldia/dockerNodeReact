'use strict';
module.exports = function(app) {
  var controller = require('./appController');

  // todoList Routes
  app.route('/questions')
    .get(controller.list_all_questions)
    .post(controller.create_a_question);
   
   app.route('/questions/:questionId')
    .get(controller.read_a_question)
    .put(controller.update_a_question)
    .delete(controller.delete_a_question);
};