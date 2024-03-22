import React, { useState } from "react";
import "../Projects/Project.css";
import Navbar from "../../Navbar/Navbar";
import { ProjectCart } from "./ProjectCart";

// console.log(ProjectCart);

const Project = () => {
  const [tabSelect, setTabSelect] = useState("All");
  const [projectData, setProjectData] = useState(ProjectCart);
  const filterList = ["All", "ReactJS", "JavaScript", "Other"];

  const handleFilter = (skill) => {
    setTabSelect(skill);
    if (skill === "All") {
      setProjectData(ProjectCart);
    } else if (skill === "Other") {
      const otherProjects = ProjectCart.filter(
        (project) =>
          !project.tech.toLowerCase().includes("react") &&
          !project.tech.toLowerCase().includes("javascript")
      );
      setProjectData(otherProjects);
    } else {
      const filteredProjects = ProjectCart.filter((project) =>
        project.tech.toLowerCase().includes(skill.toLowerCase())
      );
      setProjectData(filteredProjects);
    }
  };
  return (
    <div className="project-container">
      <Navbar />
      <div>
        <h1 className="heading-name">My Projects</h1>
      </div>

      <div className="project-data">
        <ul className="ul-style">
          {filterList.map((items, index) => (
            <li
              key={index}
              style={{
                color: tabSelect === items ? "#FFD700" : "inherit",
                cursor: "pointer",
                listStyleType: "none",
              }}
              onClick={() => handleFilter(items)}
            >
              {items}
            </li>
          ))}
        </ul>


        <ul style={{width:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexWrap:'wrap' }}>
          {projectData.map((item, index) => {
            return (
              <li key={index} style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', width: '30%' }}>
                <a
                  href={item.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>{item.title}</h3>
                  <figure>
                    {item.image} ? (
                    <img src={item.image} width={"100px"} height={"100px"} alt={item.title} />
                    )
                  </figure>
                </a>
              </li>
            );
          })}
        </ul>

      </div>
    </div>
  );
};

export default Project;
