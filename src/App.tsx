import React, { useState } from 'react';

import QuestionCard from './components/QuestionCard';

// import { Container } from './styles';

const src: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {}

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}

  const nextQuestion = () => {}

  return (
    <div>
      <h1>Book Trivia!</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score: </p>
      <p>Loading questions...</p>

      <QuestionCard
        questionNumber={questionNumber + 1}
      />

      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default src;