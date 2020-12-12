import React, { Component } from 'react';
import Solutions from './Solutions';

class SolutionInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addSolution({text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text: '',
    });
  }
  render() {
    return (
      <div>
     <form onSubmit={this.handleOnSubmit} >
          <label>Add Solution: </label>
          <textarea 
            id="text" 
            name="text" 
            rows="10" 
            cols="80"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}>
          </textarea>
        
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default SolutionInput;
