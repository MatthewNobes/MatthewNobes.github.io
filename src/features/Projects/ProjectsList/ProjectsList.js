import { useState, useEffect } from "react";
import { projectsData } from "../../../data/projectData";
import Project from "../Project";
import getProjects from "../getProjects";

export const ProjectsList = () => {
  const holder = true;
  const [projectsList, appendProjectList] = useState([projectsData]);

  useEffect(() => {
    getProjects().then((result) => appendProjectList(result));
  }, [holder]);

  return (
    <div className="Main-Content">
      {projectsList.map((list) => {
        return (
          <Project
            key={list.id}
            projectName={list.name}
            primaryLanguage={list.language}
            description={list.description}
            repoLink={list.html_url}
            pagesLink={list.name}
          />
        );
      })}
    </div>
  );
};
