import React, { Component } from 'react'

class Solution extends Component {
	handleClick = () => { this.props.onClick(this.props.solution.id) }

	handleDelete = () => { this.props.onDelete(this.props.solution.id) }

	render () {
		return(
		  <div className="tile">
		  	<span className="deleteButton" onClick={this.handleDelete}>x</span>
		    <h4 onClick={this.handleClick}>{this.props.solution.text}</h4>
		    <p onClick={this.handleClick}>{this.props.solution.language}</p>
		  </div>
		)
	}
}

export default Solution
