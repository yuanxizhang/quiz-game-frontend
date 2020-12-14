import React, { Component } from 'react'
import SolutionInput from '../components/solutions/AddSolution'
import Solutions from '../components/solutions/Solutions'
import {connect} from 'react-redux'
class SolutionsContainer extends Component {
  render() {
    return (
      <div>
        <SolutionInput
          addSolution={this.props.addSolution}
          restaurantId={this.props.restaurant.id}
        />
        <Solutions
          solutions={this.props.solutions}
          restaurantId={this.props.restaurant.id}
          deleteSolution={this.props.deleteSolution}
        />
      </div>
    );
  }
}

const mapStateToProps = ({solutions}) => {
  return {solutions}
}

const mapDispatchToProps = dispatch => ({
  addSolution: solution => dispatch({type: 'ADD_SOLUTION', solution}),
  deleteSolution: id => dispatch({type: 'DELETE_SOLUTION', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(SolutionsContainer)
