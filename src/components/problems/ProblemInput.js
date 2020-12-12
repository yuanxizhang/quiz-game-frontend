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
    this.props.addProblems(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Enter the coding problem or challenge text: </label>
          <textarea 
            id="text" 
            name="text" 
            rows="10" 
            cols="80"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}>

          </textarea>
          
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
};

export default ProblemsInput;