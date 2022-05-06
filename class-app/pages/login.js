// import { Fragment } from "react"
import Link from "next/link" // para que no se refresque la pagina
import { useRouter } from "next/router";
import users from '../users/usuarios'
import AppContext from '../contexts/appContext'
import { useContext } from "react";


export default function login() {
    const value = useContext(AppContext)
    let { teacher } = value.state
    const router = useRouter()

    async function userExists(id, password){
        // const res = await fetch("http://localhost:3000/api/return/"+id)
        // const r = await res.json();
        // return r
        let config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
        // console.log(id)
        let r = {};
        await fetch("http://localhost:3000/api/user/" + id, config).then(response => response.json()).then(data => {
            //console.log(data)
            r = data
        })
        //console.log(r);
        // Console logs for testing
        console.log(r[0])
        //console.log(r[0].id)
        //console.log(r[0].contraseÑa +" con")
        if (r[0].id == id && r[0].contraseÑa == password) {
            return [true, r[0].usertype]
        } else {
            return [false, r[0].usertype]
        }
    }
    
    async function submitHandler(e) {
        e.preventDefault();
        let fields = e.target.elements
        let exists = await userExists(fields.code.value, fields.studentPassword.value)
        console.log(`Type : ${exists[1]}`)
        if (exists[0]) {
            //props.teacher = true
            //console.log(exists[1])
            if (exists[1] == 'profesor') {
                //console.log(teacher)
                value.setTeacher(true)
                //console.log(teacher)
            } else {
                value.setTeacher(false)
            }
            router.push('/home') // -> To Home
        } else {
            alert("No existe ese usuario")
        }
    
        
    }


    return <div className="container">
        <h1 className="display-4">Login Page</h1>
        <div className="border border-info rounded p-3">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Student Code</label>
                    <input type="text" className="form-control" name="code" aria-describedby="codeHelp" />
                    <div id="codeHelp" className="form-text">We'll never share your information with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" name="studentPassword" />
                </div>
                <div className="d-flex flex-column align-items-center">
                <button type="submit" className="btn btn-primary w-25">Submit</button>
                <Link href="/reg"><a className="mt-3">Registrarme</a></Link>
                </div>
            </form>
        </div>
        
        <Link href="/">Regresar</Link>
    </div>
}