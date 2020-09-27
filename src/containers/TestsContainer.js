import React, { Component } from 'react'
import TestInput from '../components/tests/TestInput'
import Tests from '../components/tests/Tests'
import { connect } from 'react-redux'

class TestsContainer extends Component {

  render() {
    return (
      <div>
        <TestInput addTest={this.props.addTest}/>
        <Tests tests={this.props.tests} deleteTest={this.props.deleteTest}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ tests: state.tests })

const mapDispatchToProps = dispatch => ({
  addTest: text => dispatch({type: 'ADD_TEST', text}),
  deleteTest: id => dispatch({type: 'DELETE_TEST', id})
})
export default connect(mapStateToProps, mapDispatchToProps)(TestsContainer)
