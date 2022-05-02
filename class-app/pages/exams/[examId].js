//import { useRouter } from 'next/router'
import { useState } from 'react'
//import { useRef } from 'react'

function SolveExamsPage({ data }){
    let questions = data.questions
    const [currentQuestion, setCurrentQuestion] = useState(0);

    let handlePrevious = () => {
        const prevQuestion = currentQuestion - 1;
        prevQuestion >= 0 && setCurrentQuestion(prevQuestion)
    }

    let handleNum = (num) => {
        const prevQuestion = num;
        prevQuestion >= 0 && setCurrentQuestion(prevQuestion)
    }

    let handleNext = () => {
        const nextQuestion = currentQuestion + 1;
        nextQuestion < questions.length && setCurrentQuestion(nextQuestion)
    }

    //const reactComp = useRef();
    //const router = useRouter();
    
    return <div>
        <h1>Solve Exams Page</h1>
        <h2>{data.name}</h2>
        
        <div>
            <h3>Question {currentQuestion + 1} of {questions.length}</h3>
            <div>
                {questions[currentQuestion].question}
            </div>
        </div>
        <div>
            {questions[currentQuestion].answers.map((answer, index) => (
                <div key={index} className="form-check">
                    <input type="radio" className="form-check-input" name={answer.answer}/>
                    <label> {answer.id})&nbsp;&nbsp;&nbsp; {answer.answer}</label>
                </div>
            ))}
        </div>
        
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
                <button type="button" onClick={handlePrevious} className="btn btn-primary">Previous</button>
                <button type="button" onClick={ () => {handleNum(0)}} className="btn btn-primary">1</button>
                <button type="button" onClick={ () => {handleNum(1)}} className="btn btn-primary">2</button>
                <button type="button" onClick={ () => {handleNum(2)}} className="btn btn-primary">3</button>
                <button type="button" onClick={ () => {handleNum(3)}} className="btn btn-primary">4</button>
                <button type="button" onClick={ () => {handleNum(4)}} className="btn btn-primary">5</button>
                <button type="button" onClick={handleNext} className="btn btn-primary">Next</button>
            </div>
        </div>
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