import React from 'react';
import { useState } from 'react';
import {Questions} from "./Questions.js";


export default function History() {

    const [currentQuestion, setQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finalHistoryScore, setFinalHistoryScore] = useState(false);

    function nextQuestion(correct) {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < Questions.History.length) {
            //if the user is not on the last question of the quiz go to the next question
            setQuestion(nextQuestion)
        } else {
            //if the user is on the last question, the final score card will show
            setFinalHistoryScore(true)
        }

        if(correct === true) {
            setScore(score + 1)
        }
    }

    function restartQuiz() {
        //resetting the quiz and the state
        setScore(0)
        setQuestion(0);
        setFinalHistoryScore(false)
    }
    
    return (
        <div className="quiz-container">
            {finalHistoryScore ? (
                <div className="score-card">
                    <p className="score">You scored {score} out of {Questions.History.length}</p>
                    <button className="restart-btn" onClick={restartQuiz}>Restart</button>
                </div>
                ) : (
                    <div>
                        <div className="quiz-header">
                            <h1 className="section-title">Quiz App - Title</h1>
                            <div className="question-count">
                                {/* //we are going to add 1 because the question array is on a zero based index */}
                                <p>{currentQuestion + 1}/{Questions.History.length}</p>
                            </div>
                        </div>
                        <div className="question-container">
                            <div className="question">
                                <p>{Questions.History[currentQuestion].question}</p>
                            </div>
                            <div className="answer-options">
                                {Questions.History[currentQuestion].options.map((option, i) => {
                                    return (
                                        //the onClick function takes in the correct option as a parameter
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