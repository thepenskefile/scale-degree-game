//action types
export const SET_QUESTION = 'SET_QUESTION';
export const SET_ANSWER = 'SET_ANSWER';
export const CHECK_ANSWER = 'CHECK_ANSWER';

//other constants
export const question = {
    key: null,
    degree: null,
    alteration: null
}

export const keys = [ 'A', 'B\u266D', 'B', 'C', 'D\u266D', 'D', 'E\u266D', 'E', 'F', 'G\u266D', 'G', 'A\u266D' ];

export const degrees = [ '2', '3', '4', '5', '6', '7', '9', '10', '11', '12', '13' ];

export const alterations = [ -1, 0, 1 ]

export const distance_from_root = {
    '2': 2,
    '3': 4,    
    '4': 5,    
    '5': 7,    
    '6': 9,    
    '7': 11,
    '9': 2,
    '10': 4,
    '11': 5,
    '12': 7,  
    '13': 9,
}

//action creators
export function setQuestion(question){
    return {type: SET_QUESTION, question}
}

export function setAnswer(key){
    return {type: SET_ANSWER, key}
}

export function checkAnswer(isCorrect){
    return {type: CHECK_ANSWER, isCorrect}
}
