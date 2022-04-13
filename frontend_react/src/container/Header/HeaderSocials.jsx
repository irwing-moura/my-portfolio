import React from "react";
import { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { urlFor, client } from "../../client";

const HeaderSocials = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const query = '*[_type == "contact"]';
    client.fetch(query).then((data) => setContact(data));
  }, []);

  return contact.map(({_id, linkedin, github}) => {
    return (
      <div key={_id} className="header__socials">
        <a href={linkedin} target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    );
  });
};

export default HeaderSocials;
