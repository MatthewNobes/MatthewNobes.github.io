import { useState, useEffect } from "react";
import Project from "./Project";
import { getProjects } from "../../../utils";
import ProjectFilters from "./ProjectFilters";

export const ProjectsList = () => {
	const holder = true;
	const [projectsList, appendProjectList] = useState([]);
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

	let languageOptions = [];
	projectsList.forEach((project) => {
		if (!languageOptions.includes(project.language)) {
			languageOptions.push(project.language);
		}
	});
	languageOptions.sort();

	useEffect(() => {
		getProjects().then((result) => appendProjectList(result));
	}, [holder]);

	return (
		<>
			<ProjectFilters
				languageOptions={languageOptions}
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
