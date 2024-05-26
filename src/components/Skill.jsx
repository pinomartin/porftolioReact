import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export const Skill = ({ imgSrc, imgAlt, url }) => {
  return (
    <div className="skill">
      <Tippy content={imgAlt} placement="bottom" animation="fade">
        <a
          href={url ? url : undefined}
          target={url ? "_blank" : undefined}
          rel="noreferrer"
          className="icon-habilidades"
        >
          <img className="img-fluid" src={imgSrc} alt={imgAlt} />
        </a>
      </Tippy>
    </div>
  );
};
