import '../../App.css';
import profileimage from '../../Media/Images/profileImage.png'

function Title() {
  return(
    <h1 className='Main-Title'>About Me</h1>
  )
}

function Profileimage() {
  return(
    <img className='home-profileImage' alt="Profile" src={profileimage}></img>
  )
}

function ContactDetails() {
  return(
    <div className="Main-Content">
      <h1>Contact Details </h1>
      <p className="Main-Paragraph">
      <ul class="Main-List">
          <li>Email</li>
            <dd><a href="mailto:mattnobes.contact@gmail.com" target="_blank" rel="noreferrer" aria-label="contact email">mattnobes.contact@gmail.com</a></dd>
          <li>Github</li>
            <dd><a href="https://github.com/MatthewNobes" target="_blank" rel="noreferrer" aria-label="github link">Projects</a></dd>
          <li>LinkedIn</li>
            <dd><a href="https://www.linkedin.com/in/matthew-nobes-10b834156/" target="_blank" rel="noreferrer" aria-label="linkedin link">See how we're connected.</a></dd>
        </ul>
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Title />
      <Profileimage />
      <div className="Main-Content">
        
        <p className='Main-Paragraph'> 
          I am a student at <a href="https://port.ac.uk" rel="noreferrer">The University of Portsmouth</a>, where I study <a href="https://www.port.ac.uk/study/courses/bsc-hons-cyber-security-and-forensic-computing" rel="noreferrer">Cyber Security and Forensic Computing</a>.
        </p>
        <p className='Main-Paragraph'> 
          As a software developer my primary interests are in web development, specifically JavaScript and C#. I am familiar with a wide array of web development technologies, such as React, Redux, jQuery and ASP.NET. Along side this, I have also extended my knowledge to cover the basics of a number of other languages. These include C, Python, Java, VB.NET and SQL. 
          </p>
        <p className='Main-Paragraph'> 
          During my software development career, my knowledge and understanding of markup languages, like HTML and XML, has led to them becoming second nature to myself. With my experience working in development roles and in personal projects, I have developed a deep understanding of object-oriented development and I recognise its importance in medium to large scale software projects.
          </p>
        <p className='Main-Paragraph'> 
          As you can see from the links below, I am a confident Git user and I have put this into practice in personal projects and while working in industry. 
        </p>
        <p className='Main-Paragraph'> 
          This site contains a variety of information. The <a href="Projects" rel="noreferrer">projects section</a> of the site includes detailed examples of projects I have undertaken and provides links to where these can be viewed.
        </p>
      </div>
      
      <ContactDetails />
    </div>
  );
}