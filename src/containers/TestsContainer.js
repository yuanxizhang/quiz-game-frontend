import React, { Component } from 'react'
import TestInput from '../components/tests/TestInput'
import TestList from '../components/tests/TestList'
import fetchTests from '../actions/testActions'
import { connect } from 'react-redux'

class TestsContainer extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchTests()
  }

  render() {
    return (
      <div class="flex-center flex-column">
        <h3> Pick a Quiz to Play </h3>
        <TestInput addTest={this.props.addTest}/>
        <TestList tests={this.props.tests} deleteTest={this.props.deleteTest}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ tests: state.tests, loading: state.loading})

const mapDispatchToProps = dispatch => ({
  fetchTests: () => dispatch(fetchTests()),
  addTest: text => dispatch({type: 'ADD_TEST', text}),
  deleteTest: id => dispatch({type: 'DELETE_TEST', id})
})
export default connect(mapStateToProps, mapDispatchToProps)(TestsContainer)
