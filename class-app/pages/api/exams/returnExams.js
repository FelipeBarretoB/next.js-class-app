
export default async function handler(req, res) {
    const fs = require('fs')
    let data = {}
    try {
        // Esto es un pecado capital, hay que arreglar esa ruta absoluta
        data = JSON.parse(fs.readFileSync('database/exams.json', 'utf8'));
        //console.log(data.count)
        //console.log("Re sape sapetin")
        res.send(data)
    } catch (err) {
        console.error(err)
        res.status(500)
    }

}