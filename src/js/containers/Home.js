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
		axios.get(`https://restcountries.eu/rest/v2/region/europe`)
			.then(res => {
				const items = res.data
				this.setState({ items })
				localStorage.setItem('regions', JSON.stringify(items))
			})
	}

	addItem(name) {
		let items = JSON.parse(localStorage.getItem('regions'))
		items.push({ name })
		localStorage.setItem('regions', JSON.stringify(items))
		this.forceUpdate()
	}

	render() {
		let items = JSON.parse(localStorage.getItem('regions'))
		return (
			<div className='container'>
				<Form addItem={this.addItem}/> 
				<Tweetslist items={items}/>
			</div>
		)
	}
}