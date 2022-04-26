import { Fragment } from "react"
import Link from "next/link" // para que no se refresque la pagina

export default function Home() {
  return (
   <Fragment>
      <h1>Indice</h1>
      <ul>
        <li><Link href="/register/profesor">Registro de profesor</Link></li>
        <li><Link href="/register/estudiante">Registro de estudiante</Link></li>
        <li><Link href="/exams">Examenes</Link></li>
        <li><Link href="/login">Login</Link></li>
        <h6><Link href="https://www.youtube.com/watch?v=xvFZjo5PgG0"><a target="_blank">c:</a></Link></h6>
        
      </ul>
   </Fragment>
  )
}
