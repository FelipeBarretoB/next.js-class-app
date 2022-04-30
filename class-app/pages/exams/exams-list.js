import Link from "next/link" // para que no se refresque la pagina

let handleClick =  e => {
    console.log("Doest nothing yet. Needs to show the exam")
}


function Card(props) {
    //console.log(props.name)
    return <div className="card border-success mb-3" style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.subject}</div>
        <div className="card-body text-success">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <p id="examId" style={{display: "none"}}>{props.id}</p>
        <button onClick={handleClick} type="button" className="btn btn-success">Empezar</button>
        </div>
  </div>
}
 
function ExamsList({ data }){
    return <div>
        <h1 className='display-3 mx-auto text-center'>Exams List</h1>
        <Link  href="/exams">Regresar</Link>
        {data.exams.map((item) => {
            console.log(item.name)
            return <Card key={item.name} name={item.name} description={item.description} subject={item.subject}/>
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