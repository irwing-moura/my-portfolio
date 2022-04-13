import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { urlFor, client } from "../../client";

const Footer = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const query = '*[_type == "contact"]';
    client.fetch(query).then((data) => setContact(data));
  }, []);

  return (
    <footer>
      <a href="#" className="footer__logo">
        Irwing Moura de Moraes
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li> */}
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {contact.map(({ _id, instagram, facebook, twitter }) => {
        return (
          <div className="footer__socials" key={_id}>
            <a href={facebook} target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href={instagram} target="_blank" rel="noreferrer">
              <FiInstagram />
            </a>
            <a href={twitter} target="_blank" rel="noreferrer">
              <IoLogoTwitter />
            </a>
          </div>
        );
      })}
      <div className="footer__copyright">
        <small>&copy; Handcrafted by me</small>
      </div>
    </footer>
  );
};

export default Footer;
