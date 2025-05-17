import React, { useState } from "react";
import "./contact.styles.scss";
import { saveContactMessage } from "../../utlis/firebase/firebase.ustil";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await saveContactMessage(formData);
    if (success) {
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus({ type: "error", message: "Failed to send message. Try again." });
    }

    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 4000); // Hide after 4 seconds
  };

  return (
    <div id="contact" className="contact">
      <section className="contact-section">
        <h2>Contact Us</h2>

        {status.message && (
          <div className={`form-status ${status.type}`}>
            {status.message}
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Reason For Contact -</option>
              <option value="support">Web Development</option>
              <option value="inquiry">App Development</option>
              <option value="graphic">Graphic Design</option>
              <option value="consultant">Consultant</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
