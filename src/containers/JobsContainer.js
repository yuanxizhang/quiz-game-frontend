import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { fetchJobs } from '../actions/fetchJobs'
import { findSearchedJobs } from '../actions/findSearchedJobs'
import Job from '../components/jobs/Job'
import JobSearch from '../components/jobs/JobSearch';
import "./container.css";
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'
class JobsContainer extends Component {

  componentDidMount() {
    this.props.fetchJobs()
  }

  handleSearch = (selection) => {
    this.props.searchJobs(selection);
  };

  render() {
    const jobs = this.props.jobs.map(job => <Job key={job.id} job={job} />);

    return(
      <Container>     
        <Row className="header">
              <JobSearch onSearch={this.handleSearch} />
        </Row>
        <Row className="main">      
          <div className="card-grid">
            {jobs}
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
    fetchJobs: () => dispatch(fetchJobs()),
    searchJobs: (selection) => dispatch(findSearchedJobs(selection))  
  }
}

function mapStateToProps(state){
  return {jobs: state.jobs, loading: state.loading}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)