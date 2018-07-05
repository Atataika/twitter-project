import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
	render() {
		return(
			<h2>Homepage {this.props.user}</h2>
		)
	}
}

function mapStateToProps(state) {
	return{
		user: state.userInfo.user
	}
}

export default connect(mapStateToProps)(Home)