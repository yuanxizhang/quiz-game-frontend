import React from 'react';
import Job from './Job' 

const JobList = ({ jobs }) => {
    return (
        <div className="card-grid">
            {jobs.map(job => {
                return <Job job = {job} key={job.id} />
            })}
        </div>
    );
}
 
export default JobList;