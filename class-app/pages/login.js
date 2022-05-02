// import { Fragment } from "react"
import Link from "next/link" // para que no se refresque la pagina
import { useRouter } from "next/router";
import users from '../users/usuarios'


export default function login() {
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
        //console.log(r[0])
        //console.log(r[0].id)
        //console.log(r[0].contraseÑa +" con")
        if (r[0].id == id && r[0].contraseÑa == password) {
            return true
        } else {
            return false
        }
    }
    
    async function submitHandler(e) {
        e.preventDefault();
        let fields = e.target.elements
        if (await userExists(fields.code.value, fields.studentPassword.value)) {
            router.push('/') // -> To Home
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
                    <div id="codeHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" name="studentPassword" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
        <Link href="/">Regresar</Link>
    </div>
}