import React from 'react';
import { Card, Badge } from 'react-bootstrap'

const Job = ({job}) => {

    return (
      <Card className="mb-3">
        <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <Card.Title>
                  {job.title} - <span className="text-muted font-weight-light">{job.company_name}</span>
                </Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                  Posted on: {new Date(job.publication_date).toLocaleDateString()}
                </Card.Subtitle>
                <Card.Subtitle className="text-muted mb-2">
                  Company website: <a href={job.url}>{job.url}</a>
                </Card.Subtitle>
                <Badge variant="secondary" className="mr-2">{job.job_type}</Badge>
                <Badge variant="secondary">{job.candidate_required_location}</Badge>
                {/* <div dangerouslySetInnerHTML={{ __html: job.}} className="howtoapply"></div>
              </div>
              <div className="companylogo">
                <img className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo} />
              </div> */}
            </div>
          </div>  
            
            
        </Card.Body>
      </Card>
    );
}
 
export default Job;