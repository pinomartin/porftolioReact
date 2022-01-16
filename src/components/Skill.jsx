import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const Skill = ({ imgSrc, imgAlt }) => {
  return (
    <div className="skill" >
      <Tippy content={imgAlt} placement='bottom' animation='fade'>
        <div className="icon-habilidades">
          <img className="img-fluid" src={imgSrc} alt={imgAlt} />
        </div>
      </Tippy>
    </div>
  );
};
