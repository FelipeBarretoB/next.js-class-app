import {usuarios} from "../../../users/usuarios"
//profesor


export default function handler(req,res){
    const {code}= req.query
    const users = usuarios.filter((users)=>users.id === code)
   res.status(200).json(users)
}