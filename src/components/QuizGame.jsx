import React, { useState, useEffect } from 'react';
import { questions as allQuestions } from '../data/questions';
import StartScreen from './StartScreen';
import QuestionCard from './QuestionCard';
import ResultScreen from './ResultScreen';

const QUESTIONS_PER_GAME = 10;

const QuizGame = () => {
    const [gameState, setGameState] = useState('start'); // start, playing, result
    const [currentQuestions, setCurrentQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const startGame = () => {
        // Shuffle and pick 10 questions
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        setCurrentQuestions(shuffled.slice(0, QUESTIONS_PER_GAME));
        setCurrentQuestionIndex(0);
        setScore(0);
        setGameState('playing');
    };

    const handleAnswer = (selectedOption) => {
        const currentQuestion = currentQuestions[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex + 1 < QUESTIONS_PER_GAME) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setGameState('result');
        }
    };

    return (
        <div className="quiz-container">
            {gameState === 'start' && <StartScreen onStart={startGame} />}
            {gameState === 'playing' && (
                <QuestionCard
                    question={currentQuestions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestions={QUESTIONS_PER_GAME}
                />
            )}
            {gameState === 'result' && (
                <ResultScreen
                    score={score}
                    totalQuestions={QUESTIONS_PER_GAME}
                    onRestart={startGame}
                />
            )}
        </div>
    );
};

export default QuizGame;
