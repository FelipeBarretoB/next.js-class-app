import db from '../../../util/database';

export default async function handler(req, res) {
    const fs = require('fs')
    const { method, body } = req;
    const { randomUUID } = require('crypto')
    try {
        if (method === 'POST') {
            console.log("Se abre el api")
            let ts = Date.now();
            let date_ob = new Date(ts);
            let day = date_ob.getDate();
            let month = date_ob.getMonth() + 1;
            let year = date_ob.getFullYear();
            let fullDate = day + "-" + month + "-" + year;
            // There's virtually no need to check if the id is unique or not. It is nearly impossible to have the same ID twice
            let id = randomUUID() + "-" + body.subject +  "-" + randomUUID() + "-" + fullDate
            body.id = id
            console.log(body.questions[0].answers)
/          await db.query('insert into exam values ($1,$2,$3,$4)',[body.name,body.id,body.subject,body.description])
            
           
            for(let c=0;c<body.questions.length;c++){
                await db.query('insert into question values ($1,$2,$3,$4,$5)',[body.id,body.id+'-'+c,body.questions[c].question,body.questions[c].correctAnswer,body.questions[c].percentage])
                for(let i=0;i<body.questions[c].answers.length;i++)
                    
                    await db.query('insert into answer values ($1,$2,$3,$4)',[body.id+'-'+c,body.id+'-'+c+'--'+i,body.questions[c].answers[i].id,body.questions[c].answers[i].answer])
            }

        }
        res.status(201).send(body)
    } catch (error) {
        console.log(error)
        res.status(400)
    }

}