import PropTypes from 'prop-types';
import React, {Fragment}  from 'react';
import { keys } from '../actions'
import { Button, Box } from 'fannypack'
import styled from 'styled-components';

const AnswerText = styled(Box)`
    font-size: 20px;
`;

const ButtonRow = styled(Box)`
    margin: 20px;
`;

const AnswerButton = styled(Button)`
    width: 50px;
    height: 50px;
    margin: 0px 3px;
    background-color: hsl(197, 92%, 61%);
    border: none;
    &:focus{
        box-shadow: none;
    }
    &:hover{
        background-color: hsl(195, 100%, 95%);
    }
`;

function AnswerButtons( props ) {
    return (
        <div>
            <ButtonRow>
                {keys.map( (key) => (
                    key.includes('\u266D') && <AnswerButton key={key} onClick={() => props.onClick(key)}>{key}</AnswerButton>
                ))}
            </ButtonRow>
            <ButtonRow>
                {keys.map( (key) => (
                    !key.includes('\u266D') && <AnswerButton key={key} onClick={() => props.onClick(key)}>{key}</AnswerButton>
                ))}
            </ButtonRow>
        </div>
    )
}

const AnswerComponent = ({ question, answer, onClickAnswerButton, isCorrect, debug }) => (
    <Fragment>
        <AnswerButtons onClick={onClickAnswerButton}/>
        <AnswerText>{isCorrect && `Correct! The ${question.alteration === 0 ? '' : (question.alteration===1 ? '\u266F' : '\u266D')}${question.degree} of ${question.key} is ${answer}`}</AnswerText>
        <AnswerText>{isCorrect===false && `Incorrect! The ${question.alteration === 0 ? '' : (question.alteration===1 ? '\u266F' : '\u266D')}${question.degree} of ${question.key} is ${answer}`}</AnswerText>
    </Fragment>         
)

AnswerComponent.propTypes = {
    question: PropTypes.object,
    answer: PropTypes.string,
    onClickAnswerButton: PropTypes.func.isRequired,
    isCorrect: PropTypes.bool,
}

export default AnswerComponent