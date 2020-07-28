
// Libs
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Components
import App from './components/App'

// Reducers
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  // This is to hook up the Chrome Redux extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
