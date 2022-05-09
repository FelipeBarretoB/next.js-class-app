import { useRouter } from 'next/router'
import { Fragment } from "react"
import Link from "next/link" 


function ExamsPage(){
    
    const router = useRouter();
    const testId = router.query.testId;

    return <Fragment>
    <h1>Exams page</h1>
    <ul>
      <li><Link href="/exams/create-exam">Create exam</Link></li>
      <li><Link href="/exams/exams-list">View exams list</Link></li>
      <li><Link href="/">Regresar</Link></li>
    </ul>
 </Fragment> 
        
}

export default ExamsPage;