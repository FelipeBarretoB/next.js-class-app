import { useRouter } from "next/router";
import { usuarios } from "../../../users/usuarios"
import db from "../../../util/database";
//profesor


export default async function handler(req, res) {
    const { method, body } = req;
    let response = db.query('SELECT * FROM USERS WHere')
    console.log(response);
    if (method === 'POST') {
        //console.log(req)

        usuarios.push({
            id: body.id,
            name: body.name,
            mail: body.mail,
            password: body.password,
            userType: body.userType
        })
        try{
           response = await db.query('INSERT INTO USERS (ID,NAME,MAIL,CONTRASEÑA, USERTYPE) VALUES ($1,$2,$3,$4,$5);', [body.id,body.name,body.mail,body.password,body.userType]);
            console.log(response); 
        }catch(error){
            console.log(error+"    0/10 api went sad")
        }
        
        res.send({
            response: usuarios.length
        })

    } else {
        const { code } = req.query
        const users = usuarios.filter((user) => user.id === code)
        res.send(users[0])
    }
}