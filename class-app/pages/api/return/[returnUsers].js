import { usuarios } from "../../../users/usuarios"


export default async function handler(req, res) {
    const  returnUsers  = req.query.returnUsers
    console.log(req.query.returnUsers+ "api")
    const users = usuarios.find((users) => users.name === returnUsers)
    console.log(users)
    res.status(200).json(users)
}