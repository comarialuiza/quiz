import React from 'react';

import { AnswerObject } from './../../API';
import { AnswersHolder, Answer, Question, Stamp } from './styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => {
    return(
        <>
            <Stamp className="number">Question: {questionNumber} / {totalQuestions}</Stamp>
            <Question className="question" dangerouslySetInnerHTML={{ __html: question }} />
            <AnswersHolder className="answers">
                {answers.map(answer => (
                    <Answer 
                        key={answer} 
                        disabled={!!userAnswer} 
                        value={answer} 
                        onClick={callback}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                        dangerouslySetInnerHTML={{ __html: answer }}
                    />
                ))}
            </AnswersHolder>
        </>
    );
}

export default QuestionCard;