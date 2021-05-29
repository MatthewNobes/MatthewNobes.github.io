import '../../App.css';
import Button from 'react-bootstrap/Button';
import {projectsList} from '../../Data/projectData';



export default function Projects() {
  return (
    <div className='Main-Content'>
      <h1 className="Main-Title">Projects</h1>
      {projectsList.map((data, key) => {
          return (
            
            <div>
              <h2 className='Sub-Title'>{data.projectName}</h2>
              <h3 className='Sub-Title' id='Language'>Developed in {data.primiaryLanguage}</h3>
              <p className="Main-Paragraph">
                {data.description}
              </p>
               <Button className="Project-External-Links"  href={data.repoLink}>View on GitHub</Button>
               <Button className="Project-External-Links"  href={data.pagesLink}>More details</Button>
            </div>
          );
        })}
    </div>
    
  );
}