
export default async function handler(req, res) {
    const fs = require('fs')
    const { method, body } = req;
    try {
        if (method === 'POST') {
            await fs.writeFileSync('C:/Users/USUARIO/Desktop/Escritorio2/Proyectos/Universidad/NextJS/next.js-class-app/class-app/database/exams.json', JSON.stringify(), function(errr) {
                if (err) {
                    console.error('No he podido crearlo')
                } else {
                    console.log("Sape")
                }
            })
        }
        res.status(201).send("All worked!")
    } catch (err) {
        res.status(400)
    }

}