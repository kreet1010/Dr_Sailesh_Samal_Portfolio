import React, { useState } from "react";
import emailjs from "@emailjs/browser"; //Powers 200 mails per month on free plan
import "./style.css";
import Navbar from "../../components/navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    contact_no: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.from_name,
      email_id: formData.email_id,
      contact_no: formData.contact_no,
      message: formData.message,
      reply_to: formData.email_id, // Reply-to email address
    };

    try {
      await emailjs.send(
        "service_0de4i96", 
        "template_kj2nlpn",
        templateParams,
        "ai2G0DwRbtWAzj7qU" 
      );
      setResponseMessage("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send message:", error);
      setResponseMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <Navbar />
      <h1>Contact Dr. Shailesh</h1>
      <p>Any question or remarks? Just write a message!</p>
      <div className="contact-content">
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
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email_id"
                placeholder="Your Email"
                value={formData.email_id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contact_no"
                placeholder="Your Contact Number"
                value={formData.contact_no}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
