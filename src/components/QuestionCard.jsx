import React from 'react';

const QuestionCard = ({ question, onAnswer, currentQuestionIndex, totalQuestions }) => {
    return (
        <div className="question-card">
            <div className="progress">
                Questão {currentQuestionIndex + 1} de {totalQuestions}
            </div>
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className="btn-option"
                        onClick={() => onAnswer(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
