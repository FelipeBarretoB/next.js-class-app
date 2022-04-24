// import { Fragment } from "react"
import Link from "next/link" // para que no se refresque la pagina
import users from '../users/usuarios'

async function submitHandler(e) {
    e.preventDefault();
    let fields = e.target.elements
    
    
    
}



export default function login() {
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
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
        <Link href="/">Return Home</Link>
    </div>
}