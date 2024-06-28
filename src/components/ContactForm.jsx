import React, { useRef } from "react";
import emailjs from "emailjs-com"; // Using emailjs-com for sending emails
import "./contactFormStyles.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const service_id = "contact_service";
    const template_id = "contact_form";
    const public_key = "XI5E8bcVXElaIypkU";

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={sendEmail} ref={form}>
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" name="user_name" required />

        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="user_email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
