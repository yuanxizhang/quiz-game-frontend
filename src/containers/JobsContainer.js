import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Spinner } from 'react-bootstrap'
import { fetchJobs } from '../actions/fetchJobs'
import { findSearchedJobs } from '../actions/findSearchedJobs'
import JobSearch from '../components/jobs/JobSearch';
import Job from '../components/jobs/Job';
import "./container.css";
class JobsContainer extends Component {

  componentDidMount() {
    this.props.fetchJobs()
  }

  handleSearch = (selection) => {
    this.props.searchJobs(selection);
  };

  render() {
      
    return(
      <Container>     
        <Row className="search-section">
              <JobSearch onSearch={this.handleSearch} />
        </Row>
        <Row>      
          <div className="main">
              {this.props.jobs.length > 0 ? (
                  this.props.jobs.map(job => <Job key={job.id} job={job} />)
                  ):(
                  <h3>No data</h3>
              )}
          </div>
          <div className="loading">
            {this.props.loading && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> }
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