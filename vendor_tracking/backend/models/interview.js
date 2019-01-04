const mongoose = require('mongoose');

const interviewSchema = mongoose.Schema({
  questionType: { type: String, required: true},
  companyAsked: { type: String, required: true},
  interviewQuestions: { type: String, required: true, unique: true },
  interviewAnswers:  { type: String, unique: true},
})

module.exports =  mongoose.model('Questions', interviewSchema)
