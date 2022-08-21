import { useState, useEffect } from "react";
import { projectsData } from "../../../data/projectData";
import Project from "../Project";
import getProjects from "../getProjects";
import ProjectFilters from "../ProjectFilters";

export const ProjectsList = () => {
  const holder = true;
  const [projectsList, appendProjectList] = useState([projectsData]);
  const [filterValue, setFilterValues] = useState("");

  let filteredProjects = projectsList;
  if (filterValue !== "") {
    filteredProjects = [];
    projectsList.forEach((project) => {
      if (project.language === filterValue) {
        filteredProjects.push(project);
      }
    });
  }

  useEffect(() => {
    getProjects().then((result) => appendProjectList(result));
  }, [holder]);

  return (
    <>
      <ProjectFilters
        languageOptions={["", "JavaScript", "C#", "Python"]}
        filterValues={filterValue}
        setFilterValues={setFilterValues}
      />
      {filteredProjects.map((project) => {
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
            license={project.license}
            topics={project.topics}
          />
        );
      })}
    </>
  );
};
