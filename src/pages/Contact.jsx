import React from 'react';
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-outer">
      <section className="contact-section">
        <h2>Any Query? Contact Us :)</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
