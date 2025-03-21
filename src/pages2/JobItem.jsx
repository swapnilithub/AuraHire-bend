import { Link } from 'react-router-dom';

const JobItem = ({ job }) => (
  <div>
    <h3>{job.title}</h3>
    {/* Other job details */}
    <Link to={`/jobs/${job.id}/applicants`}>View Applicants</Link>
  </div>
);
