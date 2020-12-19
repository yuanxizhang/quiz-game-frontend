import React, { Component } from 'react';
import DataService from "../services/ProblemDataService";
import Solution from '../components/solutions/Solution';
import SolutionForm from '../components/solutions/EditSolution';
import update from 'immutability-helper'
import Notification from '../components/solutions/Notification'

class SolutionsContainer extends Component {

  state = {
      problem: this.props.problem,
      solutions: [],
      editingSolutionId: null,
      notification: '',
      transitionIn: false
  }


  componentDidMount() {
    DataService.getSolutions()
    .then(response => {
      this.setState({solutions: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewSolution = () => {
    DataService.createSolution({solution: {text: '', Language: '', problemm_id: this.props.problem.id}})
    .then(response => {
      const solutions = update(this.state.solutions, { $splice: [[0, 0, response.data]]})
      this.setState({solutions: solutions, editingSolutionId: response.data.id})
    })
    .catch(error => console.log(error))
  }

  updateSolution = (solution) => {
    const solutionIndex = this.state.solutions.findIndex(x => x.id === solution.id)
    const solutions = update(this.state.solutions, {[solutionIndex]: { $set: solution }})
    this.setState({solutions: solutions, notification: 'All changes saved', transitionIn: true})
  }

  deleteSolution = (id) => {
    DataService.deleteSolution(id)
    .then(response => {
      const solutionIndex = this.state.solutions.findIndex(x => x.id === id)
      const solutions = update(this.state.solutions, { $splice: [[solutionIndex, 1]]})
      this.setState({solutions: solutions})
    })
    .catch(error => console.log(error))
  }

  resetNotification = () => {this.setState({notification: '', transitionIn: false})}

  enableEditing = (id) => {
    this.setState({editingSolutionId: id}, () => { this.text.focus() })
  }

  render() {
    return (
      <div>
        <div>
          <button className="newSolutionButton" onClick={this.addNewSolution} >
            New Solution
          </button>
          <Notification in={this.state.transitionIn} notification= {this.state.notification} />
        </div>
        {this.state.solutions.map((solution) => {
          if(this.state.editingSolutionId === solution.id) {
            return(<SolutionForm solution={solution} key={solution.id} updateSolution={this.updateSolution}
                    textRef= {input => this.text = input}
                    resetNotification={this.resetNotification} />)
          } else {
            return (<Solution solution={solution} key={solution.id} onClick={this.enableEditing}
                    onDelete={this.deleteSolution} />)
          }
        })}
      </div>
    );
  }
}

export default SolutionsContainer