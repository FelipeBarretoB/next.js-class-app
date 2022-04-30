
export default async function handler(req, res) {
    const fs = require('fs')
    const { method, body } = req;
    const { randomUUID } = require('crypto')
    try {
        if (method === 'POST') {
            let ts = Date.now();
            let date_ob = new Date(ts);
            let day = date_ob.getDate();
            let month = date_ob.getMonth() + 1;
            let year = date_ob.getFullYear();
            let fullDate = day + "-" + month + "-" + year;
            // There's virtually no need to check if the id is unique or not. It is nearly impossible to have the same ID twice
            let id = randomUUID() + "-" + body.subject +  "-" + randomUUID() + "-" + fullDate
            body.exams[body.exams.length - 1].id = id
            await fs.writeFileSync('database/exams.json', JSON.stringify(body), function(errr) {
                if (err) {
                    console.error('No he podido crearlo')
                } else {
                    console.log("All right")
                }
            })
        }
        res.status(201).send(body)
    } catch (err) {
        res.status(400)
    }

}