import "../../App.css";
import ProfileImage from "./ProfileImage";

const Title = () => <h1 className="PageTitle">About Me</h1>;

export const Home = () => (
	<div>
		<Title />
		<ProfileImage />
		<div className="Main-Content">
			<p className="Main-Paragraph">
        I am a full stack developer with primary interests in JavaScript, React
        and PostgreSQL. I originally trained in Cyber Security, graduating with
        First class honors in BSc Cyber Security and Forensic Computing. During
        my degree I spent time as a front-end developer while working at a
        multinational defence company during my industrial placement year,
        rekindling my passion for software design and development. I have
        continued to work for this company after my placement year, even doing
        my final year dissertation for them, and pursing a full time career with
        them.
			</p>
			<p className="Main-Paragraph">
        On this site is a summary of my software development skills, alongside a
        portfolio of my public projects, taken directly from GitHub using its
        API. All the code for these projects is public, although licensing can
        vary.
			</p>
			<p className="Main-Paragraph">
        I have been fortunate to be exposed to a number of different coding
        languages and ecosystems over nearly a decade of learning and
        experimenting. I have had the chance to cover C, Python, Java,
        JavaScript, C# and assembly code. Alongside these, I have also had the
        freedom to explore some proprietary development suites such{" "}
				<a
					href="https://knowledgecenter.gcora.genpact.com/help/what-is-sequence"
					rel="noreferrer"
				>
          Cora SeQuence
				</a>{" "}
        and{" "}
				<a
					href="https://www.tibco.com/products/tibco-webfocus"
					rel="noreferrer"
				>
          WebFOCUS
				</a>
        .
			</p>
			<p className="Main-Paragraph">
        In recent years my main focus has been on JavaScript and some of its
        many derivations, frameworks and libraries. These include React,
        SvelteKit, jQuery and Redux. Many of these can be seen on the Projects
        page. While working on web applications, I have naturally built up
        strong CSS and HTML skills. Going forward I plan to pivot more towards
        Svelte, learning how I can use it alongside Tailwind to provide quicker
        prototypes of the many projects I wish to experiment with.
			</p>
			<p className="Main-Paragraph">
        Exploring styling options has been one of the aims of my front-end
        applications. Utilising tools like Material UI, React-bootstrap, SASS
        and Tailwind CSS has enabled me to explore what works for me and to aid
        my ability to make architectural decisions for future projects.
			</p>
			<p className="Main-Paragraph">
        While working on data visualisation projects I have gained the
        opportunity to investigate a wide array of data visualisation
        techniques. From integrating data into{" "}
				<a href="https://threejs.org/" rel="noreferrer">
          Three JS
				</a>{" "}
        3D models, using{" "}
				<a href="https://d3js.org/" rel="noreferrer">
          D3
				</a>{" "}
        treemaps and more traditional charts and graphs. I also had the unique
        chance to learn WebFOCUS and discover its built-in capabilities as a
        data middleman and reporting tool. In the future, I want to experiment
        more with D3’s capabilities, as well as looking at other
        JavaScript-based visualisation methods, such as{" "}
				<a href="https://www.chartjs.org/" rel="noreferrer">
          chart.js
				</a>
        .
			</p>
			<p className="Main-Paragraph">
        In my personal projects and while working I have become familiar with a
        mixture of different database variants and management tools. From
        database systems SQL Server, PostgreSQL and Oracle. I have also had the
        chance to work on database interface projects, including C#
        (ASP.NET-based solutions). Currently, I am also looking into more modern
        solutions such as Prisma and MongoDB.
			</p>
			<p className="Main-Paragraph">
        Software testing is a vital part of ensuring quality when delivering any
        software application. My testing experience has focused primarily on
        automated testing tools, such as Jest and playwright. I now intend to
        progress my skills in this area by looking at more detailed solutions,
        such as{" "}
				<a
					href="https://www.selenium.dev/documentation/webdriver/"
					rel="noreferrer"
				>
          Selenium's WebDriver
				</a>{" "}
        system.
			</p>
			<p className="Main-Paragraph">
        From studying Cyber Security and Forensic computing, I have become well
        versed in a wide range of security skills and tools. With modules such
        as Ethical Hacking, Malware Forensics, Security Management and
        Vulnerability Discovery & Exploitation. Although I have not selected a
        cyber security-based career, the knowledge I have gained during my
        degree has greatly influenced the way I produce software, with security
        as a primary focus from the outset.
			</p>
			<p className="Main-Paragraph">
        For those interested in how I made this site, you can check out the
        source code{" "}
				<a
					href="https://github.com/MatthewNobes/MatthewNobes.github.io"
					rel="noreferrer"
				>
          here
				</a>{" "}
        and for more information on how it works, view the wiki{" "}
				<a
					href="https://github.com/MatthewNobes/MatthewNobes.github.io/wiki"
					rel="noreferrer"
				>
          here
				</a>
        . It is being hosted using{" "}
				<a href="https://pages.github.com/" rel="noreferrer">
          GitHub pages
				</a>
        .
			</p>
		</div>
	</div>
);
