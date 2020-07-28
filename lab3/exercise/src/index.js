
// Libs
import React from 'react'
import { render } from 'react-dom'

// Components
import App from './components/App'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// HINT: Create the initial state of the application here by invoking the reducers.
const store = createStore(
  reducers
)

// HINT: Pass the store into the App using react-redux's Provider component
render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
