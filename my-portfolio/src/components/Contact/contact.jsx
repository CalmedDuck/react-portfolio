import React from 'react';
import './contact.css'; // Ensure this path is correct

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form" name="contact" method="POST" data-netlify="true">
        {/* Netlify hidden input for form name */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
