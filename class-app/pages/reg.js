import Link from "next/link" // para que no se refresque la pagina


export default function login() {


    return <div className="container">
        <h1 className="display-4">Register Page</h1>
        <div>
        <Link href="/register/estudiante">Registrarme como estudiante</Link>
        </div>
        <Link href="/register/profesor">Registrarme como profesor</Link>
        <div>
        <Link href="/login">Iniciar Sesión</Link>
        </div>
    </div>
}