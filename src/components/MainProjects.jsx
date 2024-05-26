import React from "react";
import projectsData from "../data/projects";
import { Skill } from "./Skill";

export const MainProjects = () => {
  return (
    <main className="main-container projects textos">
      <h1>Projects</h1>
      <div className="skills-container">
        {projectsData.map((item) => (
          <Skill key={item.id} imgSrc={item.imgSrc} imgAlt={item.imgAlt} />
        ))}
      </div>
    </main>
  );
};
