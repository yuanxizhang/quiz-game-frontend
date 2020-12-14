import React, { Component } from 'react';
import DataService from "../../services/DataService";

class AddSolution extends Component {
  state = {
    id: null,
    language: '',
    text: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {
        text: this.state.text,
        language: this.state.language,
        problem_id: this.props.problemId
    };

    DataService.createProblem(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          text: response.data.text,
          language: response.data.language
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
    
  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.handleOnSubmit} >
            <h5>Add a new solution</h5>
            <label htmlFor="language"> language:</label>
            <input className='input' type="text" name="language" placeholder='Enter a language'
                value={this.state.language} onChange={this.handleInputChange}
                ref={this.props.textRef} />
            <label htmlFor="text">Solution:</label>
            <textarea className='input' name="text" placeholder='Enter your solution'
                value={this.state.text} onChange={this.handleInputChange}></textarea>
            <button onClick={this.handleSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
      </div>
    );
  }
};

export default AddSolution;
