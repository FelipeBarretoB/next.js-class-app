//import { useRouter } from 'next/router'
import { useRouter } from 'next/router';
import { useState } from 'react'
//import { useRef } from 'react'

function SolveExamsPage({ data }){
    const router = useRouter()
    //console.log(data)
    let questions = data[1]
    let answer =data[2]
    
    //console.log(questions[0].questions)
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(0)

    let handleSubmit = () => {
        //console.log(questions)
        let newScore = 0;
        for (let i = 0; i < questions.length; i++) {
            
            // I feel there's something wrong. But it works. So all good
            let correctId = questions[i].correctanswer;
            // console.log(answer[i])
            // console.log(selectedOptions[i]?.answerByUser)
            // console.log(correctId)
            answer[i].map(
                (answer) => 
                    (answer.id == correctId) &&
                    answer.anwers === selectedOptions[i]?.answerByUser &&
                    (newScore += 1)
            );
        }
        setScore(newScore)
        //console.log(newScore)
        setShowScore(true);
    }

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

    let leaveExam = () => {
        router.push("/home")
    }

    let handleAnswerOption = (answer) => {
        setSelectedOptions([
            (selectedOptions[currentQuestion] = {answerByUser: answer})
        ])
        setSelectedOptions([...selectedOptions]);
        console.log(selectedOptions)
    }

    //const reactComp = useRef();
    //const router = useRouter();
    
    return <div>
        {
            showScore ? ( 
            <div>
                <h1 className="text-3xl font-semibold text-center text-black">You scored {score} out of {questions.length}</h1>
                <button onClick={leaveExam}>Salir del examen</button>
            </div>
            ) :
            (<div>
                <h1>Solve Exams Page</h1>
                <h2>{data[0].name}</h2>
                <div>
                    <h3>Question {currentQuestion + 1} of {questions.length}</h3>
                    <div>
                        {questions[currentQuestion].questions}
                    </div>
                </div>
                <div>
                    {answer[currentQuestion].map((answer, index) => (
                        
                        <div key={index} className="form-check">
                            <input type="radio" className="form-check-input" name={answer.anwers} onChange={(e) => handleAnswerOption(answer.anwers)}
                            checked={answer.anwers === selectedOptions[currentQuestion]?.answerByUser}/>
                            <label> {answer.id})&nbsp;&nbsp;&nbsp; {answer.anwers}</label>
                        </div>
                    ))}
                </div>
                
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" onClick={handlePrevious} className="btn btn-primary">Previous</button>
                        <button type="button" onClick={ () => {handleNum(0)}} className="btn btn-primary">1</button>
                        <button type="button" onClick={ () => {handleNum(1)}} className="btn btn-primary">2</button>
                        <button type="button" onClick={ () => {handleNum(2)}} className="btn btn-primary">3</button>
                        <button type="button" onClick={ () => {handleNum(3)}} className="btn btn-primary">4</button>
                        <button type="button" onClick={ () => {handleNum(4)}} className="btn btn-primary">5</button>
                        <button type="button" onClick={currentQuestion + 1 === questions.length ? handleSubmit : handleNext} className="btn btn-primary">
                        {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
                <button onClick={leaveExam}>Salir del examen</button>
            </div>)
        }

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
    //console.log(data)
    return { props: {data} }
}

export default SolveExamsPage;