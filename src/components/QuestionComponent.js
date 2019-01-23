import PropTypes from 'prop-types';
import React  from 'react';
import { Box } from 'fannypack';

function Question (props) {
    const question = props.question;
    if(question.alteration === 1){
        return <Box fontSize='30px'> What is the {'\u266F'}{question.degree} of {question.key}?</Box>
    }
    else if(question.alteration === -1){
        return <Box fontSize='30px'> What is the {'\u266D'}{question.degree} of {question.key}?</Box>
    }
    else if(question.alteration === 0){
        return <Box fontSize='30px'> What is the {question.degree} of {question.key}?</Box>
    }
    else{
        return null
    }
}

const QuestionComponent = ({ question }) => (
    <Question question={question}></Question>        
)

QuestionComponent.propTypes = {
    question: PropTypes.object.isRequired,
}

export default QuestionComponent