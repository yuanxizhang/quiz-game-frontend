import React, { Component } from 'react'
import ProblemInput from '../components/problems/ProblemInput'
import Problems from '../components/problems/Problems'
import { getProblems, addProblem, deleteProblem } from '../actions/problemActions'; 
import { connect } from 'react-redux'

class ProblemsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getProblems();
  }

  render() {
    return (
      <div>
        <ProblemInput addProblem={this.props.addProblem}/>
        <Problems problems={this.props.problems} deleteProblem={this.props.deleteProblem}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ problems: state.problems, loading: state.loading })

const mapDispatchToProps = (dispatch) => {
  return {
    getProblems: () => dispatch(getProblems()),
    addProblem: (problem) => dispatch(addProblem(problem)),
    // editProblem: (problemId) => dispatch(editProblem(problemId)),
    deleteProblem: problemId => dispatch(deleteProblem(problemId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProblemsContainer)
