import '../../App.css';
import Button from 'react-bootstrap/Button';
import {projectsList} from '../../Data/projectData';

function Title() {
  return (
    <h1 className="Main-Title">Projects</h1>
  )
}

function Introduction() {
  return(
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
    </div>
  )
}

export default function Projects() {
  return (
    <div>
        <Title />
        <Introduction />
      <div className='Main-Content'>
        
        {projectsList.map((data, key) => {
            return (
              
              <div>
                <h2 className='Sub-Title'>{data.projectName}</h2>
                <h3 className='Sub-Title' id='Language'>Developed in {data.primiaryLanguage}</h3>
                <p className="Main-Paragraph">
                  {data.description}
                </p>
                <Button className="Project-External-Links"  href={data.repoLink} target="_blank">View on GitHub</Button>
                <Button className="Project-External-Links"  href={data.pagesLink}>More details</Button>
              </div>
            );
          })}
      </div>
    </div>
  );
}