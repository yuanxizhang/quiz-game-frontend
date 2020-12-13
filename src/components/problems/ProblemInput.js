import React, { Component } from 'react';
class ProblemsInput extends Component {

  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();  
    this.props.addProblem({text: this.state.text});
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Add your coding problem or challenge: </label>
          <br></br>
          <textarea 
            id="text" 
            name="text" 
            rows="5" 
            cols="60"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}>
          </textarea>
          <br></br>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default ProblemsInput;