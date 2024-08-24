import React from 'react';
import HeroSlider from "../pages/HeroSlider";
import "../styles/Home.css";
import HeroSlider2 from '../pages/HeroSlider2';

const jobs = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "Patna",
    description: "Looking for a skilled software engineer with 3+ years experience."
  },
  {
    title: "Product Manager",
    company: "Innovate Inc.",
    location: "Bangalore",
    description: "Seeking a product manager to lead our product development team."
  },
  {
    title: "UI/UX Designer",
    company: "Designify",
    location: "Noida",
    description: "Hiring a creative UI/UX designer to work on exciting new projects."
  }
];

const newsArticles = [
  {
    title: "New Job Opportunities in Tech",
    summary: "Explore the latest job opportunities in the technology sector.",
    link: "https://www.naukri.com/campus/career-guidance/latest-technology-trends-for-freshers"
  },
  {
    title: "How to Improve Your Resume",
    summary: "Tips and tricks to enhance your resume and land your dream job.",
    link: "https://enhancv.com/resources/resume-fixer/"
  },
  {
    title: "Interview Preparation Guide",
    summary: "Prepare for your next interview with our comprehensive guide.",
    link: "https://www.interviewbit.com/practice/n"
  }
];

const testimonials = [
  {
    name: "Leo",
    feedback: "An amazing platform that has helped me find the perfect job!"
  },
  {
    name: "Cristiano",
    feedback: "Great user experience and support. Highly recommended!"
  },
  {
    name: "Swapnil Ranjan",
    feedback: "A fantastic resource for job seekers. Very user-friendly!"
  }
];

const Home = () => {
  return (
    <div className="home-background">
    <section className="p-0 hero-slider-section">
      <HeroSlider />
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-container">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">Company: {job.company}</p>
              <p className="job-location">Location: {job.location}</p>
              <p className="job-description">{job.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="latest-news">
        <h2>Latest News</h2>
        <div className="news-container">
          {newsArticles.map((article, index) => (
            <div className="news-card" key={index}>
              <h3 className="news-title">{article.title}</h3>
              <p className="news-summary">{article.summary}</p>
              {article.link !== "#" ? (
                <a href={article.link} className="news-link" target="_blank" rel="noopener noreferrer">Read more</a>
              ) : (
                <span className="news-link">Read more (Coming soon)</span>
              )}
            </div>
          ))}
        </div>
      </section>
      <HeroSlider2 />
      <section className="user-testimonials">
        <h2>User Testimonials</h2>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </section>
      <section className="featured-videos">
        <h2>Featured Videos</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lwao2gqDoBU?si=M4Kru_PcbhJ6n_qF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BSb3vOE9slE?si=nsQxaDtsf5BBX2tc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </section>
    </div>
  );
};

export default Home;
