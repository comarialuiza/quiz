import styled from 'styled-components';

export const WrapperLeft = styled.div`
    background-color: #cf4939;
    width: 50%;
    padding: 50px;
`;

export const WrapperRight = styled.div`
    background-color: #533ed4;
    width: 50%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`;

export const StartButton = styled.button`
    cursor: pointer;
    background-color: #0f082b;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    padding: 14px 20px;
    border: 0;
    border-radius: 10px;
`;

export const Title = styled.h1`
    font-family: 'MuseoModerno', cursive;
    font-size: 60px;
    margin-bottom: 30px;
    color: #fff;
    width: 100%;
`;

export const NextButton = styled.button`
    background-color: #0f082b;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    padding: 20px 24px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
`;

export const Score = styled.h3`
    color: #fff;
    font-size: 30px;
    margin-bottom: 20px;
    font-family: 'MuseoModerno', cursive;
    margin-top: 20px;
`;