import React from "react";
import "./style.css";
import Navbar from "../../components/navbar";
const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <h1>Contact Us</h1>
      <p>Any question or remarks? Just write a message to Dr. Sailesh!</p>
      <div className="contact-content">
        {/* Left section: Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Say something to start a live chat!</p>
          <ul>
            <li>
              <i className="fas fa-phone"></i> +91 99234 56754
            </li>
            <li>
              <i className="fas fa-envelope"></i> drShailesh@gmail.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> UK, London
            </li>
          </ul>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-discord"></i></a>
          </div>
        </div>

        {/* Right section: Form */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <div>
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <div>
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <label>Phone Number</label>
                <input type="text" placeholder="+1012 3456 789" />
              </div>
            </div>
            <div className="form-group">
              <label>Select Subject:</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="subject" value="general" />
                  General Inquiry
                </label>
                <label>
                  <input type="radio" name="subject" value="support" />
                  Support
                </label>
                <label>
                  <input type="radio" name="subject" value="feedback" />
                  Feedback
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message..."></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
