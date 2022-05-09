const fs = require('fs')
import db from '../../../util/database'

export default  async function handler (req, res) {
     const examId = req.query.returnExam
     let exam = await db.query('select e.* from exam e where e.id=$1',[examId])
     let question = await db.query('select q.* from exam e, question q where e.id=q.id and e.id=$1',[examId])
     let answer = [] 

     for(let i =0;i<question.rows.length;i++){
         let temp= await db.query('select a.* from answer a, question q where q.questionid=a.questionid and q.id=$1 and q.questionid=$2',[examId, question.rows[i].questionid])
         answer.push(temp.rows)
     }
     
     res.send([exam.rows,question.rows, answer])
 }