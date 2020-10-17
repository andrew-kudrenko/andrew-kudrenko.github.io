import React from 'react'
import ReactDOM from 'react-dom' 
import './index.scss' 
import '@vkontakte/vkui/dist/vkui.css'
import { App } from './App' 
import * as serviceWorker from './serviceWorker' 
import { applyMiddleware, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/reducers/rootReducer'
import { Provider } from 'react-redux'

const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
) 

serviceWorker.unregister() 
