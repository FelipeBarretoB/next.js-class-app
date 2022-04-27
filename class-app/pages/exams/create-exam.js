import { useRouter } from 'next/router'
import { useState } from 'react';
import Formulary from '../Components/Formulary';
//import { useRef } from 'react'

function About(props) {
    return <div>
        <p>{props.name}</p>
    </div>
}

function CreateExamsPage() {
    //const reactComp = useRef();
    const router = useRouter();
    const testId = router.query.testId;
    const [sape] = useState([])
    const a=1;

    let handleClick = e => { 
        e.preventDefault();
        sape.push({name: "Sape" + a})
        //setSape({name: "Sape1"})
        console.log("?") 
        a++
        return a
    }

    const forms = [1,2,3,4,5];

    //const finalForm = forms.map((item) => {<Formulary form={item}/>});



    return <div>

    
    <h1>crear examen</h1>
    <form>
        {forms.map((item) => {<Formulary form={item}/>})}
        <input type="submit"></input>
    </form>
    
    </div>

}

export default CreateExamsPage;