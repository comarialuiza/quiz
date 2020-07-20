import styled from 'styled-components';

type AnswerButtonProps = {
    correct: boolean;
    userClicked: boolean;
}

export const AnswersHolder = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const Answer = styled.button<AnswerButtonProps>`
    padding: 15px 10px;
    margin-top: 20px;
    width: 100%; 
    background: ${({correct, userClicked}) => 
        correct 
            ? '#80b060'
            : !correct && userClicked 
            ? '#c34b48'
            : '#6a699f'
    };
    color: #fff;
    border: 0;
    cursor: pointer;
    border-radius: 10px;
`;

export const Question = styled.p`
    color: #fff;
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 20px;
    text-align: center;
`;

export const Stamp = styled.h3`
    color: #fff;
    font-size: 30px;
    margin-bottom: 20px;
    font-family: 'MuseoModerno', cursive;
`;