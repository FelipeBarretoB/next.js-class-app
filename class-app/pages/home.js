import Link from "next/link" 
import { useContext } from "react"
import AppContext from "../contexts/appContext"

function CreateExam() {
    return <div>
        <h1>Crear exameneeeess</h1>
        <Link href="/exams/create-exam">Crear nuevo examen</Link>
    </div>
}

function ExamList() {
    return <div>
        <Link href="/exams/exams-list">Ver los examenes</Link>
    </div>
}

export default function Home() {
    const value = useContext(AppContext)
    let { teacher } = value.state
    //console.log(teacher)

    return <div>
        <h1>Sape Home</h1>
        {/* <CreateExam /> */}
        { teacher ? <CreateExam /> : null}
        <ExamList />
        <p>{teacher ? "Es Profesor" : "No es profesor"}</p>
        <Link href="/exams/exams-list">Examenes</Link>
    </div>
}