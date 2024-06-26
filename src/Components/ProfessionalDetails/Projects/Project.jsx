import React, { useState } from "react";
import "../Projects/Project.css";
import Navbar from "../../Navbar/Navbar";
import { ProjectCart } from "./ProjectCart";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const Project = () => {
  const [tabSelect, setTabSelect] = useState("All");
  const [projectData, setProjectData] = useState(ProjectCart);
  const filterList = ["All", "ReactJS", "JavaScript", "Other"];

  const handleFilter = (items) => {
    setTabSelect(items);
    if (items === "All") {
      setProjectData(ProjectCart);

    } else if (items === "Other") {
      const otherProjects = ProjectCart.filter((project) =>
        !project.tech.toLowerCase().includes("react") &&
        !project.tech.toLowerCase().includes("javascript")
      );
      setProjectData(otherProjects);

    } else {
      const filteredProjects = ProjectCart.filter((project) =>
        project.tech.toLowerCase().includes(items.toLowerCase())
      );
      setProjectData(filteredProjects);
    }
  };

  return (
    <div className="commonRightStyle">
      <Navbar />
      <div>
        <h1 className="heading-name">My Projects</h1>
      </div>

      <div className="project-data">
        <ul className="ul-style">
          {filterList.map((items, index) => (
            <li key={index} onClick={() => handleFilter(items)} style={{ color: tabSelect === items ? "#FFD700" : "inherit", cursor: "pointer", listStyleType: "none", }}>
              {items}
            </li>
          ))}
        </ul>

        <ul className="project-ul">
          {projectData.map((item, index) => {
            return (
              <li key={index} className="project-ul-li">
                <a href={item.preview} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>
                  <h3 style={{ fontSize: "18px", marginTop: '2rem', textAlign: 'center', opacity: '0.8' }}>{item.title}</h3>

                  <figure style={{ marginTop: '1rem' }}>
                    {item.image ? (
                      <img id="pro-img" src={item.image} width={"100%"} height={"150px"} alt={item.title} style={{ borderRadius: '20px' }} />
                    ) : (
                      <div>No Image Available</div>
                    )}
                  </figure>
                </a>

                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '10px', color: 'white', opacity: '0.6' }}>{item.overView}</p>

                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '10px', color: 'white', opacity: '0.8' }}>{item.tech}</p>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', width: '100%', gap: '0.7rem', marginTop: '1rem' }}>

                  <a href={item.preview} target="_blank" id="ac-btn"><FaEye />Preview</a>
                  <a href={item.githubLink} target="_blank" id="ac-btn"><FaGithub />GitHub</a>

                </div>
              </li>
            );
          })}
        </ul>
      </div>

    </div>
  );
};

export default Project;
