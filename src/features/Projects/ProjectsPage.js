import "../../App.css";
import LanguageCardPane from "./LanguageCardPane";
import ProjectsList from "./ProjectsList";

const Title = () => <h1 className="PageTitle">Projects</h1>;

const Introduction = () => (
  <div className="Main-Content">
    <p className="Main-Paragraph">
      I have been programming for over a decade now and in this time I've
      produced a variety of coding projects while gaining experience with a wide
      array of programming and markup languages including:
    </p>
    <LanguageCardPane />
    <p className="Main-Paragraph">
      Many examples of my public projects can be found on my GitHub and seen on
      this page. The projects listed below have been pulled directly from
      GitHub, using the GitHub REST API. This list includes all of my public
      repositories. Many of the web applications I have created are hosted using
      GitHub Pages; the try it button will open these applications for you have
      a go yourself. For a full explanation of how this page works check out the
      wiki page{" "}
      <a
        href="https://github.com/MatthewNobes/MatthewNobes.github.io/wiki/Projects"
        rel="noreferrer"
        aria-label="View the Projects wiki page for a full explanation of the API system"
      >
        here
      </a>
      .
    </p>
  </div>
);

export const ProjectsPage = () => (
  <>
    <Title />
    <Introduction />
    <div className="Main-Content">
      <ProjectsList />
    </div>
  </>
);
