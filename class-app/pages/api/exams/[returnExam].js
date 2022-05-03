const fs = require('fs')
import db from '../../../util/database'

export default  async function handler (req, res) {
     const examId = req.query.returnExam
     /*let data = JSON.parse(fs.readFileSync('database/exams.json', 'utf8')).exams;
     let exam = data.find((ex) => ex.id == examId)*/
     let exam = await db.query('select e.* from exam e where e.id=$1',[examId])
     let question = await db.query('select q.* from exam e, question q where e.id=q.id and e.id=$1',[examId])
     let answer = await db.query('select a.* from answer a, question q where q.questionid=a.questionid and q.id=$1',[examId])
     
     
     //console.log(examId)
     //console.log(exam)
     //console.log(data)
     res.send([exam.rows,question.rows, answer.rows])
 }