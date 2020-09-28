import React, { Component } from 'react'
import TestInput from '../components/tests/TestInput'
import Tests from '../components/tests/Tests'
import { fetchTests } from '../actions/testActions'
import { connect } from 'react-redux'

class TestsContainer extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchTests()
  }

  render() {
    return (
      <div class="flex-center flex-column">
        <TestInput addTest={this.props.addTest}/>
        <Tests tests={this.props.tests} deleteTest={this.props.deleteTest}/>
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
