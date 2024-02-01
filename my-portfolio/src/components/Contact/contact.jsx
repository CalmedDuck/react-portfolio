import React from 'react';
import { useNavigate } from 'react-router-dom';
import './contact.css';

const Contact = () => {
  const navigate = useNavigate();

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    // Construct form data
    const formData = new FormData(form);
    const encodedData = encode({
      'form-name': form.getAttribute('name'),
      ...Object.fromEntries(formData)
    });

    fetch('/', { // POST to the root path (Netlify form handling)
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData,
    })
    .then((response) => {
      if (response.ok) {
        // Handle successful form submission
        console.log('Form successfully submitted');
        navigate('/success'); // Redirect to the success page using React Router
      } else {
        // Handle server errors
        console.error('Server responded with non-OK status:', response.status);
      }
    })
    .catch((error) => {
      console.error('Form submission error:', error);
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
