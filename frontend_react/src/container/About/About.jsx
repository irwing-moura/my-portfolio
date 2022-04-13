import React from "react";
import { useEffect, useState } from "react";
import { images } from "../../constants";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { urlFor, client } from "../../client";

import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={images.java} alt="About Image" />
          </div>
        </div>

        {abouts.map(({ _id, yearWorked, projects, about }) => {
          return (
            <div key={_id} className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5>Experience</h5>
                  <small>{yearWorked}</small>
                </article>
                <article className="about__card">
                  <VscFolderLibrary className="about__icon" />
                  <h5>Projects</h5>
                  <small>{projects}</small>
                </article>
              </div>
              <p>
               {about}
              </p>

              <a href="#contact" className="btn btn-primary">
                {" "}
                Let's Talk
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
