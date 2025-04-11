import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
function Contact() {
  return (
    <div className="container">
 
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="contact"
    >
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/your-endpoint" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
      <p><FaEnvelope /> ku.mukesh8474@gmail.com</p>
      <p><FaPhone /> 8115748474</p>
      <p>Location: Chandauli, Uttar Pradesh, 232106</p>
    </motion.section></div>
  );
}

export default Contact;