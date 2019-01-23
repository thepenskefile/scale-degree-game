import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import scaleDegreeGame from './reducers';
import App from './components/App'

const store = createStore(scaleDegreeGame);

render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)
