import React from "react";
import CV from "../../assets/Curriculum.pdf";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";

const CTA = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return abouts.map(({ _id, curriculum }) => {
    return (
      <div className="cta" key={_id}>
        <a href={CV} download className="btn">
          Download CV
        </a>

        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    );
  });
};

export default CTA;
