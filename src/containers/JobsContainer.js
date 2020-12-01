import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import { fetchJobs } from '../actions/fetchJobs'
import { findSearchedJobs } from '../actions/findSearchedJobs'
import Job from '../components/jobs/Job'
import JobSearch from '../components/jobs/JobSearch';
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
        <div className="main">
          <h1>Find Jobs on Github</h1>
          <div>
              <JobSearch onSearch={this.handleSearch} />
          </div>
          {this.props.loading && <h1>Loading...</h1>}
          <div className="card-grid">
            {jobs}
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