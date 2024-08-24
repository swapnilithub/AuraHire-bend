import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Routers from "../../routers/Routers";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import RecruitHeader from "../header/RecruitHeader";
import { useUser } from "../../UserContext";

const Layout = ({ jobs, addJob }) => {
  const { userType } = useUser();
  const location = useLocation();
  
  // Routes where Header and Footer should not be displayed
  const noHeaderFooterRoutes = ['/welcome-page', '/login', '/signup'];

  const [localJobs, setLocalJobs] = useState([]);

  useEffect(() => {
    setLocalJobs(jobs);
  }, [jobs]);

  const handleAddJob = (newJob) => {
    setLocalJobs((prevJobs) => {
      const updatedJobs = [...prevJobs, newJob];
      return updatedJobs;
    });
    if (addJob) {
      addJob(newJob);
    }
  };

  return (
    <Fragment>
      {!noHeaderFooterRoutes.includes(location.pathname) && (
        userType === 'recruiter' ? <RecruitHeader /> : <Header />
      )}
      <div>
        <Routers jobs={localJobs} addJob={handleAddJob} />
      </div>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </Fragment>
  );
};

export default Layout;
