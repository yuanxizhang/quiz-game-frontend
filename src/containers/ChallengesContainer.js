import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { fetchChallenges } from '../actions/fetchChallenges'
import { findSearchedChallenges } from '../actions/findSearchedChallenges'
import Challenge from '../components/challenges/Challenge'
import ChallengeSaerch from '../components/challenges/ChallengeSearch';
import "./container.css";

class ChallengesContainer extends Component {

  componentDidMount() {
    this.props.fetchChallenges()
  }

  handleSearch = (selection) => {
    this.props.searchChallenges(selection);
  };

  render() {
   const challenges = this.props.course.map(course => <Challenge key={course.id} course={course} />); 

    return(
      <Container>     
        <Row className="search-section">
              <ChallengeSearch onSearch={this.handleSearch} />
        </Row>
        <Row>      
          <div className="main">
            {challenges}
          </div>
          <div className="loading">
            {this.props.loading && <h4>Loading...</h4>}
          </div>
        </Row>
      </Container>
    );
  }
};

function mapDispatchToProps(dispatch){
  return { 
    fetchChallenges: () => dispatch(fetchChallenges()),
    searchChallenges: (selection) => dispatch(findSearchedChallenges(selection))  
  }
}

function mapStateToProps(state){
  return {challenges: state.challenges, loading: state.loading}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesContainer)