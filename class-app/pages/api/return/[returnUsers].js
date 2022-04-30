//import { usuarios } from "../../../users/usuarios"
import db from "../../../util/database"


export default async function handler(req, res) {
    const  returnUsers  = req.query.returnUsers
    let found = false
    console.log(returnUsers)
    let response = await db.query('SELECT ID FROM USERS WHERE ID =$1', [returnUsers] )
    console.log(response.rowCount ==0)
    //const users = usuarios.find((user) => user.id === returnUsers)
    if (response.rowCount==1) {
        found = true
    }

    res.send(found)
    
}