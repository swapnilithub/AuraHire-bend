const JobManager = () => {
    const [jobs, setJobs] = useState([]);
  
    const addJob = (job) => {
      setJobs([...jobs]);
    };
  
    return (
      <Router>
        <Routers jobs={jobs} addJob={addJob} />
      </Router>
    );
  };
  