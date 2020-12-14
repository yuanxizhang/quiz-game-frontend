import React, { Component } from 'react';
import DataService from "../../services/DataService";
class Solution extends Component {
	
  deleteSolution = () => {
    DataService.deleteSolution(this.props.solution.id)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

	render () {
		return(
		  <div className="tile">
		  	
        <h6>language: {this.props.solution.language}</h6>
		    <p>Code: {this.props.solution.text}</p>
		    <button className="badge badge-danger mr-2" onClick={this.deleteSolution}>
            Delete
        </button>
		  </div>
		)
	}
}

export default Solution