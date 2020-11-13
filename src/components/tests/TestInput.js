import React, { Component } from 'react';

class TestInput extends Component {

  state = {
    name: ''
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addTest(this.state.name);
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Enter the name of the quiz: </label>
          <input
            type="text"
            name="name" 
            id="name"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
};

export default TestInput;
