import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1gkp7sl",
        "template_b74koa8",
        form.current,
        "pc7mWaZRrUNT5ZWvg"
      )
      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kaiohenrique018@hotmail.com</h5>
            <a href="mailto:kaiohenrique018@hotmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Kaio Henrique</h5>
            <a href="https://www.linkedin.com/in/kaio-henrique-2378b51a2/">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>55+ 81997322676</h5>
            <a href="https://api.whatsapp.com/send?phone=5581997322676">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;