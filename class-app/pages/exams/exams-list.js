// className PageSape extends React.Component {

//     componentDidMount() {
//        this.retrieveData()
//     }

//     async retrieveData() {
//         let exams = {}
//         let data = await fetch("http://localhost:3000/api/exams/returnExams").then(response => response.json()).then(data => {
//             console.log(data.count)
//             //console.log(data.count + "Aqui toy")
//             exams = data
//         })
//         console.log("Im here")
//         console.log(exams)
//     }


//     render() {
//         return <div>
//             <h1>Exams List</h1>
//             <p>Sape</p>
//         </div>

//     }
// }

let handleClick =  e => {
    console.log("Doest nothing yet. Needs to show te exam")
}


function Card(props) {
    //console.log(props.name)
    return <div className="card border-success mb-3" style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.subject}</div>
        <div className="card-body text-success">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <button onClick={handleClick} type="button" className="btn btn-success">Empezar</button>
        </div>
  </div>
}
 
function ExamsList({ data }){
    //const dataRef = useRef()

    // let retrieveData = async e => {
    //     let exams = {}
    //     // let data = await fetch("http://localhost:3000/api/exams/returnExams").then(response => response.json()).then(data => {
    //     //     //console.log(data.count + "Aqui toy")
    //     //     exams = data
    //     // })
    //     // console.log(data)
    //     // return exams.exams
    //     return [{name: "Sape"}]
    // }
    //const arr = retrieveData(null)
    //let sape = [arr]
    // let exams = {}
    // let data = fetch("http://localhost:3000/api/exams/returnExams").then(response => response.json()).then(data => exams = data)
    // console.log(exams)
    // exams = exams.exams

    //const reactComp = useRef();
    //const router = useRouter();
    //const testId = router.query.testId;
    return <div>
        <h1>Exams List</h1>
        {data.exams.map((item) => {
            console.log(item.name)
            return <Card key="{item}" name={item.name} description={item.description} subject={item.subject}/>
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