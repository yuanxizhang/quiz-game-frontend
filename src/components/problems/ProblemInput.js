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
          <label>Add your coding problem or challenge: </label>
          <textarea 
            id="text" 
            name="text" 
            rows="12" 
            cols="64"
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