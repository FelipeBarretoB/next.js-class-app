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
    
    const router = useRouter();
    const testId = router.query.testId;
    const [sape] = useState([])
    const a=1;

    

    const forms = [0,1,2,3,4];

    let checkAllValues = () => {
        let allOk = false
        let sumPercentages = 0
        let name = document.getElementsByName('nombre')[0];
        let subject = document.getElementsByName('materia')[0];
        let description = document.getElementsByName('description')[0]
        let exam = {name: name.value, id: "", subject: subject.value, description: description.value, questions: []}
        for(let i = 0; i < forms.length; i++) {
            let percentage = document.getElementsByName('pregunta-'+forms[i]+"-porcentaje")[0]
            sumPercentages += parseInt(percentage.value);
            let question = document.getElementsByName('examen-'+forms[i])[0];
            let answerA = document.getElementsByName('pregunta-'+forms[i]+"-A")[0]
            let answerB = document.getElementsByName('pregunta-'+forms[i]+"-B")[0]
            let answerC = document.getElementsByName('pregunta-'+forms[i]+"-C")[0]
            let answerD = document.getElementsByName('pregunta-'+forms[i]+"-D")[0]
            let correctAnswer = document.getElementsByName('pregunta-'+forms[i])
            let choiceMarked = false
            
            let correct = ""
            for (let j = 0; j < correctAnswer.length && !choiceMarked; j+=1) {
                console.log(correctAnswer[j].name)
                if (correctAnswer[j].checked) {
                    choiceMarked = true
                    correct = correctAnswer[j].value
                }
            }
            let tempQuestion = {question: question.value, answers: [
                {
                    id: "A",
                    answer: answerA.value
                },
                {
                    id: "B",
                    answer: answerB.value
                },
                {
                    id: "C",
                    answer: answerC.value
                },
                {
                    id: "D",
                    answer: answerD.value
                }
            ],
            correctAnswer: correct,
            percentage: parseInt(percentage.value)
            }
            exam.questions.push(tempQuestion)
            allOk = (name.value != '' && description.value != '' && subject.value != '' && question.value != '' && answerA.value != '' && answerB.value != '' && answerC.value != '' && answerD.value != '' && choiceMarked && percentage.value != '') ? true : false
            
        }

        if (allOk == false) {
            alert("Te faltan campos por llenar")
        }
        if (sumPercentages > 100) {
            alert("El porcentaje de las preguntas supera el 100%")
            allOk = false
        } else if (sumPercentages < 100) {
            alert("El porcentaje de las preguntas no llega al 100%")
            allOk  = false
        }
        return [allOk, exam]
    }

    let handleSubmit = async e => {
        e.preventDefault()
       
        let attributes = checkAllValues()
        if(attributes[0]) {
           
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(attributes[1])
               
            }
            console.log(config.body)
            await fetch('http://localhost:3000/api/exams/createExam', config)
        } else {
            console.log("Hell Nah!")
        }

    }

    let writeJson = async obj => {
        
    }

    return <div>
        <h1 className='display-3 mx-auto text-center'>Crear Examen</h1>
        {/* <Link href="/exams"><a className='d-block text-center'>Regresar</a></Link> */}
        <div className="container border border-info rounded p-3">
            <form onSubmit={handleSubmit}>
                <label className="form-label h4">Nombre del examen</label>
                <input type="text" className="form-control" name="nombre" style={{marginBottom: ".5em"}}></input>
                <label className="form-label h4">Materia</label>
                <input type="text" className="form-control" name="materia" style={{marginBottom: ".5em"}}></input>
                <label className="form-label h4">Descripción</label>
                <input type="text" className="form-control" name="description" style={{marginBottom: ".5em"}}></input>
                {forms.map((item) => {
                    return <Formulary key={item} form={item}/>
                })}
            <input type="submit" className = "btn btn-primary form-control" value="Crear Examen"></input>
            </form>
        </div>
    </div>

}

export default CreateExamsPage;