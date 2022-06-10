import "../../App.css";
import ProfileImage from "./ProfileImage";

const Title = () => <h1 className="PageTitle">About Me</h1>;

export const Home = () => (
  <div>
    <Title />
    <ProfileImage />
    <div className="Main-Content">
      <p className="Main-Paragraph">
        I am a final year student at{" "}
        <a href="https://port.ac.uk" rel="noreferrer">
          The University of Portsmouth
        </a>
        , where I study{" "}
        <a
          href="https://www.port.ac.uk/study/courses/bsc-hons-cyber-security-and-forensic-computing"
          rel="noreferrer"
        >
          Cyber Security and Forensic Computing
        </a>
        . I also work as a Software Developer at a multi-national defense
        company.
      </p>
      <p className="Main-Paragraph">
        As a software developer my primary interests are in web development,
        specifically JavaScript and React. I am familiar with a wide array of
        web development technologies, such as React, Redux, Jest, jQuery and
        ASP.NET. Along side this, I have also extended my knowledge to cover the
        basics of a number of other languages. These include C, Python, Java,
        VB.NET and SQL.
      </p>
      <p className="Main-Paragraph">
        During my software development career, my knowledge and understanding of
        markup languages, like HTML and XML, has led to them becoming second
        nature to myself. With my experience working in development roles and in
        personal projects, I have developed a deep understanding of
        object-oriented development and I recognise its importance in medium to
        large scale software projects.
      </p>
      <p className="Main-Paragraph">
        As you can see from the links below, I am a confident Git user and I
        have put this into practice in personal projects and while working in
        industry.
      </p>
      <p className="Main-Paragraph">
        This site contains a variety of information. The projects section of the
        site includes detailed examples of projects I have undertaken and
        provides links to where these can be viewed.
      </p>
    </div>
  </div>
);
