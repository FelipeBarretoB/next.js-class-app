import { useRouter } from 'next/router'
//import { useRef } from 'react'

function ExamsPage(){
    //const reactComp = useRef();
    const router = useRouter();
    const testId = router.query.testId;

    return  <h1>Exams page</h1>
        
}

export default ExamsPage;