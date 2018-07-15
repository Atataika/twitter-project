import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'

export default function Rout() {
let a = true;
	return(
		<BrowserRouter>
			<div>
				<div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow'>
					<h5 className='my-0 mr-md-auto font-weight-normal'>Twitter-Project</h5>
					<div className='my-2 my-md-0 mr-md-3'>
						<Link to='/' className='p-2 text-dark'>Home</Link>
					</div>
					{ a === false ? 
		                <button className='btn btn-outline-primary' >Sign Out</button> :
		                <Link to='/login' className='btn btn-primary'>Login</Link> }
				</div>

				<Route exact path='/' component={ Home } />
				<Route path='/login' component={ Login } />
				<Route path='/signup' component= { Signup } />
			</div>
		</BrowserRouter>
	)
}