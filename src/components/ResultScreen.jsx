import React from 'react';

const ResultScreen = ({ score, totalQuestions, onRestart }) => {
    const percentage = (score / totalQuestions) * 100;

    let message = "";
    if (percentage === 100) {
        message = "Você é um verdadeiro Acreano! 🌟";
    } else if (percentage >= 70) {
        message = "Muito bem! Conhece bastante do Acre. 🐊";
    } else if (percentage >= 40) {
        message = "Dá para melhorar... Estude mais sobre a floresta! 🌳";
    } else {
        message = "Você acha que o Acre não existe, né? 🦕";
    }

    return (
        <div className="result-screen">
            <h2>Fim de Jogo!</h2>
            <div className="score-display">
                <p>Você acertou {score} de {totalQuestions}</p>
                <p className="percentage">{percentage.toFixed(0)}%</p>
            </div>
            <p className="message">{message}</p>
            <button className="btn-restart" onClick={onRestart}>Jogar Novamente</button>
        </div>
    );
};

export default ResultScreen;
