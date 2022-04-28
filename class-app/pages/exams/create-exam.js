import { useRouter } from 'next/router'
import { useState } from 'react';
import Formulary from '../Components/Formulary';
import Link from "next/link" // para que no se refresque la pagina

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

    let handleSubmit = e => {
        e.preventDefault()
        console.log("Sapetin")
    }

    const forms = [1,2,3,4,5];

    //const finalForm = forms.map((item) => {<Formulary form={item}/>});



    return <div>
        <h1 className='display-3 mx-auto text-center'>Crear Examen</h1>
        <Link href="/exams"><a className='d-block text-center'>Regresar</a></Link>
        <div className="container border border-info rounded p-3">
            <form onSubmit={handleSubmit}>
                {forms.map((item) => {
                    return <Formulary key={item} form={item}/>
                })}
            <input type="submit"></input>
            </form>
        </div>
    </div>

}

export default CreateExamsPage;