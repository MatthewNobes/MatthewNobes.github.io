import '../../App.css';
import { useState, useEffect } from 'react';
import { projectsData } from '../../Data/projectData';
import axios from 'axios';

import Project from './Project';

const Title = () => (
  <h1 className="Main-Title">Projects</h1>
);

const getProjects = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/matthewnobes/repos`);
    return(response.data)
  }
  catch (error){
      console.log(error);
  }
}

const Introduction = () => (
  <div className='Main-Content'>
    <p className="Main-Paragraph">
    I have been programming since 2013 and in this time I've produced a variety of coding projects. I have experience with a wide array of programming and markup languages including:
    </p>
    <ul className="Main-List">
      <li>C#</li>
      <li>CSS</li>
      <li>HTML</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>Python</li>
      <li>SQL</li>
    </ul>
    <p className="Main-Paragraph">
        Many examples of my personal projects can be found on my GitHub. I have not to included all the projects I have made. This is due to the fact that some of these contain sensitive information I do not wish to make public. Some of these projects are hacking tools I have developed that if used with malicious intent, could cause harm to others. I have therefore made some repositories private, in an effort to protect others.
    </p>
    <p className="Main-Paragraph">
      The projects listed below have been pulled directly from GitHub, using the GitHub REST API. This list includes all of my public repositories.
    </p>
  </div>
);


const ProjectsList = () => {
  const [projectsList, appendProjectList] = useState([projectsData]);
  
  useEffect(() => {
    getProjects().then((result)=> appendProjectList(result));
  })

  return (
    <div className='Main-Content'>
        {projectsList.map((list, i) => {
          return (
            <Project projectName={projectsList[i].name} primaryLanguage={projectsList[i].language} description={projectsList[i].description} repoLink={projectsList[i].html_url} pagesLink={projectsList[i].name}/>      
          );
        })}
    </div>
  );
}

const ProjectsPage = () => (
  <>
      <Title />
      <Introduction />
      <ProjectsList />
  </>
);

export default ProjectsPage;