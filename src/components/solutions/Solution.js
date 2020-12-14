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
		  <div className="card">
		  	
        <h6>Language: {this.props.solution.language}</h6>
		    <p class="card-text">{this.props.solution.text}</p>
		    <button 
          className="badge badge-pill badge-danger" 
          onClick={this.deleteSolution}>
            Delete
        </button>
		  </div>
		)
	}
}

export default Solution
