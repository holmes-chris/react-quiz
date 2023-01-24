import React from 'react';
import { useState } from 'react';
import {Questions} from "./Questions.js";


export default function Math() {

    const [currentQuestion, setQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finalMathScore, setFinalMathScore] = useState(false);

    function nextQuestion(correct) {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < Questions.Math.length) {
            setQuestion(nextQuestion)
        } else {
            setFinalMathScore(true)
        }

        if(correct === true) {
            setScore(score + 1)
        }
    }

    function restartQuiz() {
        setScore(0);
        setQuestion(0);
        setFinalMathScore(false)
        console.log(currentQuestion)
    }

    return (
        <div className="quiz-container">
            {finalMathScore ? (
                <div className="score-card">
                    <p className="score">You scored {score} out of {Questions.Math.length}</p>
                    <button className="restart-btn" onClick={restartQuiz}>Restart</button>
                </div>
                ) : (
                    <div>
                        <div className="quiz-header">
                            <h1 className="section-title">Quiz App</h1>
                            <div className="question-count">
                                <p>{currentQuestion + 1}/{Questions.Math.length}</p>
                            </div>
                        </div>
                        <div className="question-container">
                            <div className="question">
                                <p>{Questions.Math[currentQuestion].question}</p>
                            </div>
                            <div className="answer-options">
                                {Questions.Math[currentQuestion].options.map((option, i) => {
                                    return (
                                        <button key={i}className="option" onClick={() => nextQuestion(option.correct)}>
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