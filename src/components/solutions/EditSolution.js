import React, { Component } from 'react'
import DataService from "../../services/DataService";


class EditSolution extends Component {
	
	state = {
      id:   this.props.solution.id,
      text: this.props.solution.text,
      language: this.props.solution.language
	}
	

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const solution = {text: this.state.text, language: this.state.language }
    DataService.update(
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
      	<form onBlur={this.handleBlur} >
					<input className='input' type="text" name="language" placeholder='Enter a Title'
            value={this.state.language} onChange={this.handleInput}
            ref={this.props.textRef} />
					<textarea className='input' name="text" placeholder='Describe your solution'
            value={this.state.text} onChange={this.handleInput}></textarea>
      	</form>
      </div>
    );
  }
}

export default EditSolution