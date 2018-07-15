import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
	return(
		<form className='form-signin mx-auto' style={{ width: '25%' }}>
			<h1 className='h3 mb-3 font-weight-normal text-center'>Accaunt registration</h1>
			<input className='form-control' placeholder='Email' type='email' name='email' id='email' />
			<input className='form-control' placeholder='Password' type='password' name='password' id='password' />
			<button className='btn btn-lg btn-primary btn-block' style={{ margin: '30px 0 0 0' }}>Signup</button>
		</form>
	)
}