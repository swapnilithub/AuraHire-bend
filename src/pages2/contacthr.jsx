import React from 'react';
import "../styles2/contacthr.css";

const Contacthr = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const params = new URLSearchParams({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }).toString();

    try {
      const response = await fetch(`/api/contact-hr?${params}`, {
        method: 'GET'
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
    <div className="contact-outer-renamed">
      <section className="contact-section-renamed">
        <h2>Any Query? Contact Us :)</h2>
        <form className="contact-form-renamed" onSubmit={handleSubmit}>
          <div className="form-group-renamed">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group-renamed">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group-renamed">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group-renamed">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="form-group-renamed">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="button-wrapper-contacthr">
            <button type="submit" className="submit-button-renamed">Send</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contacthr;
