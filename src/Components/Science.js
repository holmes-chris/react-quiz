import React from 'react';
import { useState } from 'react';
import {Questions} from "./Questions.js";


export default function Science() {

    const [currentQuestion, setQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finalScienceScore, setFinalScienceScore] = useState(false);
    

    function nextQuestion(correct) {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < Questions.Science.length) {
            setQuestion(nextQuestion)
        } else {
            setFinalScienceScore(true)
        }

        if(correct === true) {
            setScore(score + 1)
        }
    }

    function restartQuiz() {
        setScore(0);
        setQuestion(0);
        setFinalScienceScore(false)
        console.log(currentQuestion)
    }

    return (
        <div className="quiz-container">
            {finalScienceScore ? (
                <div className="score-card">
                    <p className="score">You scored {score} out of {Questions.Science.length}</p>
                    <button className="restart-btn" onClick={restartQuiz}>Restart</button>
                </div>
                ) : (
                    <div>
                        <div className="quiz-header">
                            <h1 className="section-title">Quiz App - Title</h1>
                            <div className="question-count">
                                <p>{currentQuestion + 1}/{Questions.Science.length}</p>
                            </div>
                        </div>
                        <div className="question-container">
                            <div className="question">
                                <p>{Questions.Science[currentQuestion].question}</p>
                            </div>
                            <div className="answer-options">
                                {Questions.Science[currentQuestion].options.map((option, i) => {
                                    return (
                                        <button key={i} className="option" onClick={() => nextQuestion(option.correct)}>
                                            <p className="option-text">{option.answer}</p>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
            )}
        </div>
    )
}