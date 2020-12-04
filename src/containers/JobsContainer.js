import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import { fetchJobs } from '../actions/fetchJobs'
import { findSearchedJobs } from '../actions/findSearchedJobs'
import Job from '../components/jobs/Job'
import JobSearch from '../components/jobs/JobSearch';
import "./container.css";
class JobsContainer extends Component {

  componentDidMount() {
    console.log(this.props.jobs.size)
    this.props.fetchJobs()
  }

  handleSearch = (selection) => {
    this.props.searchJobs(selection);
  };

  render() {
    const jobs = this.props.jobs.map(job => <Job key={job.id} job={job} />);

    return(
      <Container className="container">     
        <div className="header">
              <JobSearch onSearch={this.handleSearch} />
        </div>
        <div className="main">      
          <div className="card-grid">
            {jobs}
          </div>
          <div className="loading">
            {this.props.loading && <h1>Loading...</h1>}
          </div>
        </div>
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