import React from 'react';

const StartScreen = ({ onStart }) => {
    return (
        <div className="start-screen">
            <h1>Quiz do Acre</h1>
            <p>Você conhece o estado onde os dinossauros ainda vivem?</p>
            <p>Teste seus conhecimentos!</p>
            <button className="btn-start" onClick={onStart}>Começar Jogo</button>
            <div className="dino-decoration">🦖</div>
        </div>
    );
};

export default StartScreen;
