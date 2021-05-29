import '../../App.css';

function Title() {
  return(
    <h1 className='Main-Title'>About Me</h1>
  )
}

function ContactDetails() {
  return(
    <div>
      <h1>Contact Details </h1>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Title />
      <div className="Main-Content">
       
        <p className='Main-Paragraph'> 
          I am a student at <a href="port.ac.uk">The University of Portsmouth</a>, where I study <a href="https://www.port.ac.uk/study/courses/bsc-hons-cyber-security-and-forensic-computing">Cyber Security and Forensic Computing</a>.
        </p>
        <p className='Main-Paragraph'> 
          This site contains a variety of information. The <a href="Projects">projects section</a> of the site includes detailed examples of projects I have undertaken and prodives links to where these can be viewed.
        </p>
      </div>
      <div className="Main-Content">
        <ContactDetails />
      </div>
    </div>
  );
}