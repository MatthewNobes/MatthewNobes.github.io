export const ContactDetails = () => (
  <div className="Main-Content">
    <h1 className="SubHeading">Contact Details </h1>
    <p className="Main-Paragraph">
      <ul className="Main-List">
        <li>Email</li>
        <dd>
          <a
            href="mailto:mattnobes.contact@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="contact email"
          >
            mattnobes.contact@gmail.com
          </a>
        </dd>
        <li>Github</li>
        <dd>
          <a
            href="https://github.com/MatthewNobes"
            target="_blank"
            rel="noreferrer"
            aria-label="github link"
          >
            Projects
          </a>
        </dd>
        <li>LinkedIn</li>
        <dd>
          <a
            href="https://www.linkedin.com/in/matthew-nobes-10b834156/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin link"
          >
            See how we're connected.
          </a>
        </dd>
      </ul>
    </p>
  </div>
);
