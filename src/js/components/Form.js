import React, { Component } from 'react'

export default class Form extends Component { 
	constructor() {
		super()
		this.state = { name: '' }
		this.handleChange = this.handleChange.bind(this)
		this.addItem = this.addItem.bind(this)
	}
  
	handleChange(e) {
		this.setState({name: e.target.value})
	}

	addItem() {
		let name = this.state.name
		this.props.addItem(name)
	}

	render() {
		return (
			<div className='mx-auto' style={{margin: '30px 0 0 0', width: '40%'}}>
				<textarea className='form-control mx-auto' onChange={this.handleChange}></textarea>
				<button className='btn btn-danger' style={{margin: '10px 0 0 0'}} onClick={this.addItem}>Добавить</button>
			</div> 
		)
	}
}