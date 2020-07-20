import React, { useState } from 'react';

import { fetchQuizQuestions, Difficulty, QuestionState, AnswerObject } from './API';
import QuestionCard from './components/QuestionCard';
import { GlobalStyle } from './styles/global';

import { WrapperLeft, WrapperRight, Container, StartButton, Title, NextButton, Score } from './styles/main';

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setQuestionNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[questionNumber].correct_answer === answer;
      if(correct) setScore(prev => prev + 1);
      const answerObject = {
        question: questions[questionNumber].question,
        answer,
        correct,
        correctAnswer: questions[questionNumber].correct_answer
      }

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = questionNumber + 1;
    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setQuestionNumber(nextQuestion);
    }
  }

  return (
    <>
      <Container>
        <WrapperLeft>
          <Title>Trivia!</Title>

          { gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <StartButton className="start" onClick={startTrivia}>Start</StartButton>
          ) : null }


          { !gameOver && <Score>Score: { score }</Score> }
          { loading && <p>Loading questions...</p> }
        </WrapperLeft>

        <WrapperRight>
          { !loading && !gameOver && <QuestionCard
            questionNumber={questionNumber + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[questionNumber].question}
            answers={questions[questionNumber].answers}
            userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
            callback={checkAnswer}
          /> }

          { !gameOver && !loading && userAnswers.length === questionNumber + 1 && questionNumber !== TOTAL_QUESTIONS - 1 && <NextButton className="next" onClick={nextQuestion}>Next Question</NextButton> }
        </WrapperRight>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;