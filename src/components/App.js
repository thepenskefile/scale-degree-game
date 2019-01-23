import React, { Component }  from 'react';
import QuestionContainer from '../containers/QuestionContainer';
import { ThemeProvider, Box } from 'fannypack';


class App extends Component {
  render(){
    return (
      <ThemeProvider>
        <Box margin='30px auto' width='50%' textAlign='center' color='hsl(209, 20%, 25%)' fontSize='30px'>Scale Degree Game</Box>
        <Box margin='50px auto' padding='20px' width='50%' height='290px' backgroundColor='hsl(214, 15%, 91%)' textAlign='center' borderRadius='5px' color='hsl(210, 24%, 16%)'>
          <QuestionContainer></QuestionContainer>
        </Box>        
      </ThemeProvider>
    )
  }
}

export default App;
