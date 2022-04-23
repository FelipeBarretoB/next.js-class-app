import { Fragment } from "react"
import Link from "next/link" // para que no se refresque la pagina

export default function Home() {
  return (
   <Fragment>
      <h1>Indice</h1>
      <ul>
        <li><Link href="/register/profesor">Registro de profesor</Link></li>
        <li><Link href="/register/estudiante">Registro de estudiante</Link></li>
        <h6><Link href="https://www.youtube.com/watch?v=xvFZjo5PgG0"> c: </Link></h6>
      </ul>
   </Fragment>
  )
}
