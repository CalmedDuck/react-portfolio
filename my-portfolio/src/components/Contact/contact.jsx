import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './contact.css'; // Ensure this path is correct

const Contact = () => {
  const navigate = useNavigate(); // Create an instance of useNavigate

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    // Construct form data
    const data = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: data,
    })
    .then((response) => {
      if (response.ok) {
        // Handle successful form submission
        console.log('Form successfully submitted');
        navigate('/success'); // Redirect to the success page using React Router
      } else {
        // Handle server errors
        console.error('Server responded with non-OK status');
      }
    })
    .catch((error) => {
      console.error('Form submission error:', error);
      // Handle form submission error (e.g., display an error message)
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        // Remove the action attribute as we're handling submission in JavaScript
      >
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
