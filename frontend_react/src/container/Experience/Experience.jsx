import React from "react";
import "./Experience.scss";
import { useEffect, useState } from "react";

import { BsPatchCheckFill } from "react-icons/bs";
import { urlFor, client } from "../../client";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    client.fetch(query).then((data) => setExperience(data));
  }, []);

  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {experience.map(({ area, works, _id }) => {
          return (
            <div key={_id} className="experience__frontend">
              <h3>{area}</h3>
              <div className="experience__content">
                {works.map((item) => {
                  return (
                    <article key={item._key} className="experience__details">
                      <BsPatchCheckFill className="experience__details-icon" />
                      <div>
                        <h4>{item.name}</h4>
                        <small className="text-light">{item.description}</small>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}        
      </div>
    </section>
  );
};

export default Experience;
