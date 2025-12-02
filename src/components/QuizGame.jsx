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

    // New state for feedback
    const [answerState, setAnswerState] = useState({
        isAnswered: false,
        selectedOption: null,
        isCorrect: false,
        feedbackMsg: ''
    });

    const correctSlangs = [
        "De rocha, parente! 🐊",
        "Só o mi! ✨",
        "Arrochou! 🔥",
        "Tu é brabo mesmo! 🏹",
        "Acertou na mosca! 🎯"
    ];

    const incorrectSlangs = [
        "Tá leso, é? 🤪",
        "Deu a bobeira, maninho! 🥀",
        "Nem aqui, nem no Juruá! 🛶",
        "Viajou na maionese! 🛸",
        "Errou feio, errou rude! ❌"
    ];

    const startGame = () => {
        // Shuffle and pick 10 questions
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        setCurrentQuestions(shuffled.slice(0, QUESTIONS_PER_GAME));
        setCurrentQuestionIndex(0);
        setScore(0);
        setGameState('playing');
        setAnswerState({ isAnswered: false, selectedOption: null, isCorrect: false, feedbackMsg: '' });
    };

    const handleAnswer = (selectedOption) => {
        if (answerState.isAnswered) return; // Prevent double clicks

        const currentQuestion = currentQuestions[currentQuestionIndex];
        const isCorrect = selectedOption === currentQuestion.answer;

        if (isCorrect) {
            setScore(score + 1);
        }

        const slangs = isCorrect ? correctSlangs : incorrectSlangs;
        const randomSlang = slangs[Math.floor(Math.random() * slangs.length)];

        setAnswerState({
            isAnswered: true,
            selectedOption,
            isCorrect,
            feedbackMsg: randomSlang
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < QUESTIONS_PER_GAME) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setAnswerState({ isAnswered: false, selectedOption: null, isCorrect: false, feedbackMsg: '' });
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
                    onNext={handleNextQuestion}
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestions={QUESTIONS_PER_GAME}
                    answerState={answerState}
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
