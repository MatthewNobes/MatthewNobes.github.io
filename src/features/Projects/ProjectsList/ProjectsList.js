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
    <>
      {projectsList.map((project) => {
        return (
          <Project
            key={project.id}
            id={project.id}
            projectName={project.name}
            primaryLanguage={project.language}
            description={project.description}
            repoLink={project.html_url}
            pagesLink={project.homepage}
            issueCount={project.open_issues}
          />
        );
      })}
    </>
  );
};
