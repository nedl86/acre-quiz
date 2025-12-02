import React from 'react';

const QuestionCard = ({ question, onAnswer, onNext, currentQuestionIndex, totalQuestions, answerState }) => {
    const { isAnswered, selectedOption, isCorrect, feedbackMsg } = answerState;

    const getOptionClass = (option) => {
        if (!isAnswered) return "btn-option";

        if (option === question.answer) {
            return "btn-option correct";
        }

        if (option === selectedOption && option !== question.answer) {
            return "btn-option incorrect";
        }

        return "btn-option disabled";
    };

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
                        className={getOptionClass(option)}
                        onClick={() => onAnswer(option)}
                        disabled={isAnswered}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {isAnswered && (
                <div className={`feedback-container ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
                    <p className="feedback-msg">{feedbackMsg}</p>
                    <button className="btn-next" onClick={onNext}>
                        {currentQuestionIndex + 1 === totalQuestions ? "Ver Resultado" : "Próxima Pergunta"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;
