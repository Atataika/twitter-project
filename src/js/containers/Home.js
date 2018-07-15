import React, { Component } from 'react'
import Tweetslist from '../components/Tweetslist'
import Form from '../components/Form'
import axios from 'axios'

export default class Home extends Component {
	constructor() {
		super()
		this.addItem = this.addItem.bind(this)
	}	

	componentDidMount() {
		axios.get(`https://twitter-project-1f1f.firebaseio.com/.json`)
			.then(res => {
				const items = res.data
				this.setState({ items })
				localStorage.setItem('tweets', JSON.stringify(items))
			})
	}

	addItem(name) {
		let items = JSON.parse(localStorage.getItem('tweets'))
		items.push({ name })
		localStorage.setItem('tweets', JSON.stringify(items))
		this.forceUpdate()
	}

	render() {
		let items = JSON.parse(localStorage.getItem('tweets'))
		return (
			<div className='container'>
				<Form addItem={this.addItem}/> 
				<Tweetslist items={items}/>
			</div>
		)
	}
}