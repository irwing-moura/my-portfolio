import React from "react";
import { useEffect, useState } from "react";
import "./Contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { urlFor, client } from "../../client";

const Contact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const query = '*[_type == "contact"]';
    client.fetch(query).then((data) => setContact(data));
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_wekd2i9",
      "template_u7lcdb2",
      form.current,
      "XP-KcL5hHwUgIhvxi"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {contact.map(({ _id, email, messenger, whatsapp }) => {
          return (
            <React.Fragment key={_id}>
              <div className="contact__options">
                <article className="contact__option">
                  <MdOutlineEmail className="contact__option-icon" />
                  <h4>Email</h4>
                  <h5>{email}</h5>
                  <a
                    href={`mailto:` + email}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Send a message
                  </a>
                </article>

                <article className="contact__option">
                  <RiMessengerLine className="contact__option-icon" />
                  <h4>Messenger</h4>
                  <h5>Irwing Moura</h5>
                  <a
                    href={messenger}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Send a message
                  </a>
                </article>

                <article className="contact__option">
                  <BsWhatsapp className="contact__option-icon" />
                  <h4>Whatsapp</h4>
                  <h5>+55 (21) 98380-4315</h5>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Send a message
                  </a>
                </article>
              </div>
            </React.Fragment>
          );
        })}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="name" placeholder="Your Email" required />
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
};

export default Contact;
