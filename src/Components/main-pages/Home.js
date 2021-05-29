import '../../App.css';

function Title() {
  return(
    <h1 className='Main-Title'>About Me</h1>
  )
}

function ContactDetails() {
  return(
    <div className="Main-Content">
      <h1>Contact Details </h1>
      <p className="Main-Paragraph">
      <ul class="Main-List">
          <li>Email</li>
            <dd><a href="mailto:mattnobes.contact@gmail.com" target="_blank" aria-label="contact email">mattnobes.contact@gmail.com</a></dd>
          <li>Github</li>
            <dd><a href="https://github.com/MatthewNobes" target="_blank" aria-label="github link">Projects</a></dd>
          <li>LinkedIn</li>
            <dd><a href="https://www.linkedin.com/in/matthew-nobes-10b834156/" target="_blank" aria-label="linkedin link">See how we're connected.</a></dd>
        </ul>
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Title />
      <div className="Main-Content">
       
        <p className='Main-Paragraph'> 
          I am a student at <a href="https://port.ac.uk">The University of Portsmouth</a>, where I study <a href="https://www.port.ac.uk/study/courses/bsc-hons-cyber-security-and-forensic-computing">Cyber Security and Forensic Computing</a>.
        </p>
        <p className='Main-Paragraph'> 
          This site contains a variety of information. The <a href="Projects">projects section</a> of the site includes detailed examples of projects I have undertaken and prodives links to where these can be viewed.
        </p>
      </div>
        <ContactDetails />
    </div>
  );
}