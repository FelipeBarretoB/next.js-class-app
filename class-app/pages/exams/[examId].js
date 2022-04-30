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

    let handleNext = () => {
        const nextQuestion = currentQuestion + 1;
        nextQuestion < questions.length && setCurrentQuestion(nextQuestion)
    }

    //const reactComp = useRef();
    //const router = useRouter();
    
    return  <div>
        <h1>Solve Exams Page</h1>
        <p>{data.name}</p>
        <div>
            <h3>Question {currentQuestion + 1} of {questions.length}</h3>
            <div>
                {questions[currentQuestion].question}
            </div>
        </div>
        <div>
            {questions[currentQuestion].answers.map((answer, index) => (
                <div key={index} className="">
                    <input type="radio" className="w-6 h-6 bg-black" name={answer.answer}/>
                    <p>{answer.id}. {answer.answer}</p>
                </div>
            ))}
        </div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
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