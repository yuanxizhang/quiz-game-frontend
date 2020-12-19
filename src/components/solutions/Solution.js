import React, { Component } from 'react';
import DataService from "../../services/ProblemDataService";
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
		  <div className="card code">
        <h6>Language: {this.props.solution.language}</h6>
		    <pre>{`${this.props.solution.text}`}</pre>
		  </div>
		)
	}
}

export default Solution
