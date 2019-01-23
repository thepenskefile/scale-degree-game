import { combineReducers } from 'redux';
import { SET_QUESTION, SET_ANSWER, CHECK_ANSWER } from './actions';

function question( state={}, action ){
    switch(action.type){
        case SET_QUESTION:
            return {...state, key: action.question.key, degree: action.question.degree, alteration: action.question.alteration}
        default:
            return state
    }
}

function answer( state=null, action ){
    switch(action.type){
        case SET_ANSWER:
            return action.key
        default:
            return state
    }
}

function isCorrect( state=null, action ){
    switch(action.type){
        case CHECK_ANSWER:
            return action.isCorrect
        default:
            return state
    }
}

const scaleDegreeGame = combineReducers({
    question,
    answer,
    isCorrect
})

export default scaleDegreeGame;