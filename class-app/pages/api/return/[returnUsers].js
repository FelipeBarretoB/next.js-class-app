import { usuarios } from "../../../users/usuarios"


export default async function handler(req, res) {
    const  returnUsers  = req.query.returnUsers
    let found = false
    const students = usuarios.students.find((student) => student.id === returnUsers)
    if (students != undefined) {
        found = true
    } else {
        const teachers = usuarios.teachers.find((teacher) => teacher.id === returnUsers)
        if (teachers != undefined) {
            found = true
        } 
    }

    res.send(found)
    
}