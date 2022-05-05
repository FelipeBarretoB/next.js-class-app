import Link from "next/link" 
import { useContext } from "react"
import AppContext from "../contexts/appContext"

export default function Home() {
    const value = useContext(AppContext)
    let { teacher } = value.state
    //console.log(teacher)

    return <div>
        <h1>Sape Home</h1>
        <p>{teacher ? "Es Profesor" : "No es profesor"}</p>
        <Link href="/exams/exams-list">Examenes</Link>
    </div>
}