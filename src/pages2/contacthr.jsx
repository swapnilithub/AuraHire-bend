import React from 'react';
import "../styles/Contact.css";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          subject: formData.get('subject'),
          message: formData.get('message')
        })
      });
      

      if (response.ok) {
        alert('Contact form submitted successfully!');
      } else {
        alert('Failed to submit the contact form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="contact-outer-con-one">
      <section className="contact-section-con-one">
        <h2>Any Query? Contact Us :)</h2>
        <form className="contact-form-con-one" onSubmit={handleSubmit}>
          <div className="form-group-con-one">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group-con-one">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group-con-one">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group-con-one">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="form-group-con-one">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="button-wrapper-contact-con-one">
            <button type="submit" className="submit-button-con-one">Send</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
