import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import './util/config'
import registerServiceWorker from './registerServiceWorker'
import RootRouter from './router'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootRouter/>
        </Router>
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()
