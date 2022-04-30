const fs = require('fs')

export default function handler (req, res) {
     const examId = req.query.returnExam
     let found = false
     let data = JSON.parse(fs.readFileSync('database/exams.json', 'utf8')).exams;
     let exam = data.find((ex) => ex.id == examId)
     //console.log(examId)
     //console.log(exam.name)
     //console.log(data)
     res.send(exam)
 }