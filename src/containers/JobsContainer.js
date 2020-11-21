import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import { fetchJobs } from '../actions/fetchJobs'
import Job from '../components/jobs/Job'
// import JobsPagination from '../components/jobs/JobsPagination';
// import SearchForm from '../components/jobs/SearchForm';

class JobsContainer extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchJobs()
  }

  render() {
    const jobs = this.props.jobs.map(job => <Job key={job.id} job={job} />);

    return(
      <Container className="my-4">
        <h1 className="mb-4">GitHub Jobs</h1>
        {/* <SearchForm params={params} onParamChange={handleParamChange} />
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> */}
        {jobs}
        {/* <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> */}
      </Container>
    );
  }
};

function mapDispatchToProps(dispatch){
  return { fetchJobs: () => dispatch(fetchJobs()) }
}

function mapStateToProps(state){
  return {jobs: state.jobs, loading: state.loading}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)