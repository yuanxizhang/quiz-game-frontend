import React, { Component } from 'react'
import ProblemInput from '../components/problems/ProblemInput'
import Problems from '../components/problems/Problems'
import { connect } from 'react-redux'

class ProblemsContainer extends Component {

  render() {
    return (
      <div>
        <ProblemInput addProblem={this.props.addProblem}/>
        <Problems problems={this.props.problems} deleteProblem={this.props.deleteProblem}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ problems: state.problems })

const mapDispatchToProps = dispatch => ({
  addProblem: text => dispatch({type: 'ADD_PROBLEM', text}),
  deleteProblem: id => dispatch({type: 'DELETE_PROBLEM', id})
})
export default connect(mapStateToProps, mapDispatchToProps)(ProblemsContainer)
