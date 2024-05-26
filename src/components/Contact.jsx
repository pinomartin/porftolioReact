import React from "react";
import { CONTACT_DATA } from "../data/contact";
import { Skill } from "./Skill";

export const Contact = () => {
  return (
    <footer className="main-container contact textos">
      <h1>Contact</h1>
      <div className="skills-container">
        {CONTACT_DATA.map((item) => (
          <Skill
            key={item.id}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            url={item.url}
          />
        ))}
      </div>
    </footer>
  );
};
