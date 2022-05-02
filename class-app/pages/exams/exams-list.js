import Link from "next/link" // para que no se refresque la pagina
import { useRouter } from "next/router";
import { useRef } from "react";


function Card(props) {
    const router = useRouter();
    const idRef = useRef()

    let handleClick = e => {
        console.log(idRef.current.value)
        router.push("/exams/" + idRef.current.value);
        //console.log("Doest nothing yet. Needs to show the exam")
    }

    //console.log(props.name)
    //btn btn-success mb-3
    return <div className="card border-primary" style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.subject}</div>
        <div className="card-body text-primary">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <input type="text" ref={idRef} style={{display : "none"}} value={props.id} readOnly/>
        {/* <p id="examId" style={{display: "none"}}>{props.id}</p> */}
        
        <button onClick={handleClick} type="button" className="btn btn-primary" value={props.id}>Empezar</button>
        </div>
  </div>
}
 
function ExamsList({ data }){

    return <div>
        <h1 className='display-3 mx-auto text-center'>Exams List</h1>
        <Link  href="/exams">Regresar</Link>
        {data.map((item) => {
            console.log(item.name +"?")
            return <Card key={item.name} name={item.name} description={item.description} subject={item.subject} id={item.id}/>
        })}
    </div>
        
}

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/exams/returnExams")
    const data = await res.json()
    console.log(data)
    return { props: {data} }

}
export default ExamsList;
// export default PageSape;