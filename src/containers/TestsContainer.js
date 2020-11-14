import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTests } from '../actions/fetchTests'
import TestInput from '../components/tests/TestInput'
import TestList from '../components/tests/TestList'
class TestsContainer extends Component {
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchTests()
  }

  render() {
    return (
      <div class="flex-center flex-column">
        <h3> Let's Play A Quiz Game </h3>
        <TestInput addTest={this.props.addTest}/>
        <TestList testCards={this.props.testCards} deleteTest={this.props.deleteTest}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    testCards: state.tests,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTests: () => dispatch(fetchTests()),
  addTest: name => dispatch({type: 'ADD_TEST', name}),
  deleteTest: id => dispatch({type: 'DELETE_TEST', id})
})
export default connect(mapStateToProps, mapDispatchToProps)(TestsContainer)
