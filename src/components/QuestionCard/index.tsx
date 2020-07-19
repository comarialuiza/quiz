import React from 'react';

// import { Container } from './styles';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: boolean;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => {
    return(
        <div>
            <p className="number">Question: {questionNumber} / {totalQuestions}</p>
            <p className="question">{question}</p>
            <div className="answers">
                {answers.map(answer => (
                    <button disabled={userAnswer} onClick={callback}>
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;