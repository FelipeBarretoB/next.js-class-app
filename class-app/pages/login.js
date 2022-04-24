import { Fragment } from "react"
import Link from "next/link" // para que no se refresque la pagina

export default function login() {
    return <Fragment>
        <h1>Login Page</h1>
        <form>
            <input type="text" />
            <input type="submit" value="" />
            <Link href="./">Return Home</Link>
        </form>
    </Fragment>
}