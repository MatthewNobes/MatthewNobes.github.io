import Button from 'react-bootstrap/Button';

const Project = (props) => {
    return (
        <div>
            <h2 className='Sub-Title'>{props.projectName}</h2>
            <h3 className='Sub-Title' id='Language'>Developed in {props.primaryLanguage}</h3>
            <p className="Main-Paragraph">
            {props.description}
            </p>
            <Button className="Project-External-Links"  id="git" href={props.repoLink} target="_blank">View on GitHub</Button>
            <Button className="Project-External-Links"  href={'https://matthewnobes.github.io/'+props.pagesLink}>Try it out!</Button>
        </div>
    )
}

export default Project;