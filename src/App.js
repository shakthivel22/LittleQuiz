import React, { useState } from 'react'
import questions from "./data"
import "./App.css"

const App = () => {

  const [CurrentQuestion,setCurrentQuestion] = useState(0);
  const [ShowScore, setShowScore] = useState(false);
  const [Score, setScore] = useState(0)

  const handleAnswerOptionClick = (isCorrect) =>{
    if(isCorrect){
      setScore((curr)=> curr+1);
    };
    const nextQuestion = CurrentQuestion+1;
    if(nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true)
    };

  };

  return (
    <div className='app'>
      {
        ShowScore ?(
          <div className='score-section'>
           you scored {Score} out of {questions.length}
          </div>
        ):(<>
        <div className='Question-section'></div>
        <div className='Question-Count'>
          <span>Question{CurrentQuestion+1}</span>/{questions.length}
        </div>
        <div className='Question-text'>
          {questions[CurrentQuestion].QuestionText}
           </div>
           <div className='answer-section'>
            {
              questions[CurrentQuestion].answerOption.map(
                (answerOption,index)=>(
                 <button onClick={()=>
                handleAnswerOptionClick(answerOption.isCorrect)}
                 key={index}>{answerOption.answerText}</button> 
                )
                )
            }
           </div>

        </>

        )
      }

    </div>
  )
}

export default App