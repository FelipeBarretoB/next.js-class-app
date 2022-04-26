import { useRouter } from 'next/router'
import { useState } from 'react';
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
/*
    const sape = [
        {
            name: "Sape1"
        },
        {
            name: "Sape2"
        },
        {
            name: "Sape3"
        }
    ]
*/
    

    return <div>
        <h1>crear examen</h1>
        <form>
            <div className="mb-3">
                <label className="form-label">Pregunta #1</label>
                <input type="text" className="form-control"></input>
                <input type="radio"></input>
            </div>
            <input type="submit"></input>
        </form>
 



    </div>

}


export default CreateExamsPage;