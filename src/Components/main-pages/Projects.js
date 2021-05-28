import '../../App.css';
import Button from 'react-bootstrap/Button'

export const projectsList = [
  {
    projectName: "Hash checker",
    repoLink: "https://github.com/MatthewNobes/Hash-Checker",
    pagesLink: "https://matthewnobes.github.io/Hash-Checker/",
    description: "My hash checking program is designed to verify downloads. It works by inputting the hash given from the source of the file, as well as the location of the file and type of algorithm used. With this information, the program creates a hash of the file and tells the user whether it is safe to use or not. There are many other programs that will do the same job however I found it handy to have a version I designed that I can change over time to meet my own needs. My plan is to eventually add a system that will automatically detect what algorithm is being used by the length or a system where more than one algorithm can be tested at the same time.",
    primiaryLanguage: "C#",
  },
  {
    projectName: "JS-Utilities",
    repoLink: "https://github.com/MatthewNobes/JS-Utilities",
    pagesLink: "https://matthewnobes.github.io/JS-Utilities/",
    description: "My hash checking program is designed to verify downloads. It works by inputting the hash given from the source of the file, as well as the location of the file and type of algorithm used. With this information, the program creates a hash of the file and tells the user whether it is safe to use or not. There are many other programs that will do the same job however I found it handy to have a version I designed that I can change over time to meet my own needs. My plan is to eventually add a system that will automatically detect what algorithm is being used by the length or a system where more than one algorithm can be tested at the same time.",
    primiaryLanguage: "JavaScript",
  },
];

export default function Projects() {
  return (
    <div className='Main-Content'>
      <h1 className="Main-Title">Projects</h1>
      {projectsList.map((data, key) => {
          return (
            
            <div  className="Main-Content">
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