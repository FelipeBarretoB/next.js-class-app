import { usuarios } from "../../../users/usuarios"


export default async function handler(req, res) {
    const  returnUsers  = req.query.returnUsers
    let found = false
    const users = usuarios.find((user) => user.id === returnUsers)
    if (users != undefined) {
        found = true
    }

    res.send(found)
    
}