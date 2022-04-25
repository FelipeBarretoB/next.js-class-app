import { useRouter } from "next/router";
import {usuarios} from "../../../users/usuarios"
//profesor


export default async function handler(req,res){
    const {method, body}=req;
    if(method=== 'POST'){
        //console.log(req)
        if (body.userType == 'profesor') {
            usuarios.teachers.push({
                id: body.id,
                name: body.name,
                mail: body.mail,
                password: body.password
            })
        } else {
            usuarios.students.push({
                id: body.id,
                name: body.name,
                mail: body.mail,
                password: body.password
            })
        }
        res.send({
            response: usuarios.students.length + usuarios.teachers.length
        })

    }else{
        const {code}= req.query
        const studentsFilter = usuarios.students.filter((student)=>student.id === code)
        const teachersFilter = usuarios.teachers.filter((teacher) => teacher.id === code)
        console.log(studentsFilter)
        console.log(teachersFilter)
        res.status(200).json({
            students: studentsFilter,
            teachers: teachersFilter
        })  
    }
    
}