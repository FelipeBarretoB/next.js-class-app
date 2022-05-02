import db from '../../../util/database';


export default async function handler(req, res) {
    const fs = require('fs')
    
    try {
        // Esto es un pecado capital, hay que arreglar esa ruta absoluta
        //data = JSON.parse(fs.readFileSync('database/exams.json', 'utf8'));
        let data = await db.query('select * from exam')
        //console.log(data.count)
        //console.log("Re sape sapetin")
        //console.log(data.rows)
        res.send(data.rows)
    } catch (error) {
        console.error(error)
        res.status(500)
    }

}