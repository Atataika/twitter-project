import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import Rout from './router'

const store = createStore(rootReducer)

localStorage.setItem('tweets', JSON.stringify([{"name": "debug tweet"}]))

render (
	<Provider store={store}>
		<Rout />
	</Provider>,
	document.getElementById('root')
)