import { useRouter } from 'next/router'
//import { useRef } from 'react'

function SolveExamsPage({ data }){
    //const reactComp = useRef();
    //const router = useRouter();
    
    return  <div>
        <h1>Solve Exams Page</h1>
        <p>{data.name}</p>
    </div>
    
}

export async function getServerSideProps({ query }) {
    const examId = query.examId
    // const router = useRouter()
    // let examId = router.query.exams
    // const router = useRouter()
    // const examId = router.query.exams;
    const res = await fetch("http://localhost:3000/api/exams/" + examId)
    const data = await res.json()
    console.log(data)
    return { props: {data} }
}

export default SolveExamsPage;