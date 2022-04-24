import {usuarios} from "../../../users/usuarios"
//profesor


export default async function handler(req,res){
    const {method, body}=req;
    if(method=== 'POST'){
        //console.log(req)
        usuarios.push({
            id: body.id,
            name: body.name,
            mail: body.mail,
            password: body.password
        })
        console.log("AAAAAAAAAAAAAAAAAA")
        res.send({
            response: usuarios.length
        })
    }else{
        const {code}= req.query
        const users = usuarios.filter((users)=>users.id === code)
        res.status(200).json(users)  
    }
    
}