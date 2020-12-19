import React, { Component } from 'react'
import DataService from "../../services/ProblemDataService";


class EditSolution extends Component {
	
	state = {
      id:   this.props.solution.id,
      text: this.props.solution.text,
      language: this.props.solution.language
	}
	

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleUpdate = () => {
    const solution = {text: this.state.text, language: this.state.language }
    DataService.updateSolution(
      this.state.id,
      {solution: solution}
      )
    .then(response => {
      console.log(response)
      this.props.updateSolution(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="tile">
      	<form onSubmit={this.handleUpdate} >
					<input className='input' type="text" name="language" placeholder='Enter a Title'
            value={this.state.language} onChange={this.handleInput}
           />
					<textarea className='input' name="text" placeholder='Describe your solution'
            value={this.state.text} onChange={this.handleInput}></textarea>
      	</form>
      </div>
    );
  }
}

export default EditSolution