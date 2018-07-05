import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import Home from './components/Home'

const store = createStore(rootReducer)

render (
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('root')
)