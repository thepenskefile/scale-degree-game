
import React, { Component}  from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { setQuestion, setAnswer, checkAnswer, question, keys, degrees, alterations, distance_from_root } from '../actions';
import QuestionComponent from '../components/QuestionComponent'
import AnswerComponent from '../components/AnswerComponent'

const mapStateToProps = function (state) {
    return {
        question: state.question,
        answer: state.answer,
        isCorrect: state.isCorrect,
    }     
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        setQuestion: setQuestion,
        setAnswer: setAnswer,
        checkAnswer: checkAnswer,
   
    }, dispatch)      
}

class QuestionContainer extends Component {

    state = {
        prevQuestion: null,
        prevAnswer: null
    }

    componentDidMount = async () => {
        this.generateQuestionAndAnswer();
    }

    generateQuestionAndAnswer = async () => {
        this.setState({
            prevQuestion: this.props.question,
            prevAnswer: this.props.answer
        })
        await this.generateQuestion();
        await this.generateAnswer();
    }

    generateQuestion = () => {
        question.key = keys[Math.floor(Math.random() * Math.floor(keys.length))];
        question.degree = degrees[Math.floor(Math.random() * Math.floor(degrees.length))];
        question.alteration = alterations[Math.floor(Math.random() * Math.floor(alterations.length))];
        this.props.setQuestion(question);        
    }

    raiseBySemitones = ( key, semitones, alteration ) => {

        var marker = 0;
        for(var i=0; i<keys.length; i++){
            if (keys[i] === key){
                marker = i;
            }
        }
        marker = ( marker + keys.length + semitones + (alteration) ) %  keys.length;
        const answer = keys[marker];
        return answer;
    }

    generateAnswer = () => {
        const { question } = this.props;

        if(question){
            var distanceFromRoot;
            for (const key of Object.keys(distance_from_root)) {
                if(key === question.degree){
                    distanceFromRoot = distance_from_root[key];
                }
            }
            this.props.setAnswer(this.raiseBySemitones(question.key, distanceFromRoot, question.alteration));
        } 
    }

    handleOnClickAnswerButton = async ( answer ) => {
        
        if( answer === this.props.answer ){
            await this.props.checkAnswer(true);
        }
        else{
            await this.props.checkAnswer(false);
        }        
        this.generateQuestionAndAnswer();
    }    

    render() {
        const { question, answer, isCorrect } = this.props;
        const { prevQuestion, prevAnswer } = this.state;
        return(
            <div> 
                <QuestionComponent question={question}/>
                <AnswerComponent question={prevQuestion} answer={prevAnswer} onClickAnswerButton={this.handleOnClickAnswerButton} isCorrect={isCorrect} debug={answer}/>
            </div>
        )
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(QuestionContainer);