import { useRouter } from 'next/router'
//import { useRef } from 'react'

function CreateExamsPage(){
    //const reactComp = useRef();
    const router = useRouter();
    const testId = router.query.testId;

    return  <h1>Create Exams page</h1>
        
}

export default CreateExamsPage;