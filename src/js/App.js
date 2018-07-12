import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import Home from './containers/Home'

const store = createStore(rootReducer)

localStorage.setItem('regions', JSON.stringify([{
	"name": "Hello World"
}]))

render (
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('root')
)