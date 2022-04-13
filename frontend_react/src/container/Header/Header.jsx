import React from "react";
import { useEffect, useState } from "react";

import { images } from "../../constants";

import "./Header.scss";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { urlFor, client } from "../../client";

const Header = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        {abouts.map(({ name, profession }) => {
          return (
            <React.Fragment key={name}>
              <h1>{name}</h1>
              <h5 className="text-light">{profession}</h5>
            </React.Fragment>
          )
        })}

        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={images.irwingAvatarCircle} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
