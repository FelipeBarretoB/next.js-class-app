import { usuarios } from "../../../users/usuarios"


export default async function handler(req, res) {
    const  returnUsers  = req.query.returnUsers
    const users = usuarios.find((users) => users.name === returnUsers)
    if(users===undefined){
        res.send(false)
    }else{
        res.send(true)
    }
    
}