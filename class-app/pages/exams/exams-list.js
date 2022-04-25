import { useRouter } from 'next/router'
//import { useRef } from 'react'

function ExamsList(){
    //const reactComp = useRef();
    const router = useRouter();
    const testId = router.query.testId;

    return  <h1>Exams list</h1>
        
}

export default ExamsList;