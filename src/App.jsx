import { useEffect, useState } from "react";

const navItems = [
  ["home", "Home"],
  ["senior-design", "Senior Design"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["reflections", "Reflections"],
  ["resume", "Resume"],
  ["contact", "Contact"],
];

const projects = [
  {
    number: "01",
    title: "CyFitness",
    tag: "Project 01",
    description: "CyFitness is an Android fitness platform designed to help users build healthy routines through workouts, exercise information, progress tracking, journaling, gym information, events, community posts, and an AI fitness assistant.",
    role: "I worked on the frontend Android application. My work included building user-facing screens and navigation, connecting the client to REST endpoints, displaying dynamic workout and community data, and supporting interactive features such as filtering workouts, managing posts, and viewing fitness information.",
    skills: "I gained experience designing multi-screen mobile interfaces, organizing Android activities and reusable adapters, consuming JSON APIs with Volley, handling asynchronous data and user interactions, and coordinating frontend work with a Spring Boot backend and a larger team.",
    demoLink: { label: "Watch the CyFitness demo ↗", url: "https://youtu.be/ACYdXcuholU?si=2mhqZiVHGDzHu3lZ" },
    resources: "Android Studio, Java, XML, Android Activities, RecyclerView adapters, Volley, Spring Boot REST APIs, WebSocket notifications, Git",
  },
  {
    number: "02",
    title: "Principal Financial Group Internship Project",
    tag: "Project 02",
    description: "As an Information Security Engineer Intern focused on Identity and Access Management, I helped modernize identity data and access provisioning at Principal Financial Group. The work supported the migration of 241,000 accounts into SailPoint Identity Security Cloud and centralized legacy entitlement data for more consistent access management.",
    role: "I engineered serverless AWS pipelines and identity-matching algorithms for account migration, built schemas and cloud infrastructure to seed 62,000 legacy entitlements into a centralized IAM database, and collaborated across teams on an automated provisioning API serving 70,000 users. I also used SQL data insights to help guide implementation decisions.",
    skills: "I gained experience with cloud architecture, serverless AWS services, identity matching, IAM concepts, database schema design, entitlement migration, API development, SQL analysis, and cross-functional security engineering.",
    resources: "AWS, SailPoint Identity Security Cloud, SQL, serverless pipelines, IAM databases, provisioning APIs, identity and entitlement data, and collaboration with cross-functional engineering and security teams.",
  },
  {
    number: "03",
    title: "Global Bites",
    tag: "Project 03",
    description: "Global Bites is a full-stack restaurant web application that combines food discovery with cultural context. Users can explore cuisines, view restaurant and dish information, read about cultural background, leave reviews, and move through menu, cart, checkout, and order-history experiences.",
    role: "I worked on the frontend and created the Menu, Explore, and Review pages. I established their page structures and navigation, built the interfaces that display cuisine and dish information, connected the pages to backend GET and POST requests, and contributed to the Confirmation page and supporting static pages.",
    skills: "I gained experience building React pages with reusable components, using React Router for navigation, loading and submitting data through APIs, designing review and rating interactions, organizing responsive page styling, and collaborating across frontend and backend responsibilities.",
    resources: "React, Bootstrap, custom CSS, Leaflet, Node.js, Express, MongoDB, Mongoose, JSON, Git, and project requirements documents.",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState(window.location.hash.slice(1) || "home");

  useEffect(() => {
    const handleHashChange = () => setActiveSection(window.location.hash.slice(1) || "home");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const goTo = (section) => {
    window.location.hash = section;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="identity-bar">
          <button className="wordmark" onClick={() => goTo("home")} aria-label="Return to home">
            Alex Stoner<span className="wordmark-dot">.</span>
          </button>
          <p>Cybersecurity Engineering · Iowa State University</p>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map(([id, label]) => (
            <button className={activeSection === id ? "active" : ""} key={id} onClick={() => goTo(id)}>{label}</button>
          ))}
        </nav>
      </header>

      <main>
        {activeSection === "home" && <Home goTo={goTo} />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "senior-design" && <SeniorDesign />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "reflections" && <Reflections />}
        {activeSection === "resume" && <Resume />}
        {activeSection === "contact" && <Contact />}
      </main>

      <footer className="site-footer">
        <div><strong>Alex Stoner<span className="wordmark-dot">.</span></strong><span>Senior portfolio · 2026–27</span></div>
      </footer>
    </div>
  );
}

function Home({ goTo }) {
  return <>
    <section className="hero section-pad">
      <div className="hero-copy">
        <h1>Welcome!</h1>
        <p className="hero-intro">Hi! I&apos;m Alex Stoner, a senior in Cybersecurity Engineering at Iowa State University. Over the past 4 years, I have built my security skills and knowledge through coursework, professional experience, and personal projects. Please look through the rest of my page to learn more about me and my time at ISU. If you have any questions or want to connect, visit my Contact page!</p>
        <div className="hero-actions"><button className="button button-dark" onClick={() => goTo("projects")}>Explore my work <span>↗</span></button><button className="text-button" onClick={() => goTo("contact")}>Get in touch <span>→</span></button></div>
      </div>
    </section>
    <section className="home-grid section-pad">
      <div className="objective-block"><h2>Career objectives</h2><p>After graduation in May 2027, I will start a full-time position as an Information Security Engineer at Principal Financial Group. I hope to keep learning throughout my time there. One of my goals is to be able to move across the cybersecurity industry, which has many opportunities to learn, grow, and keep work interesting.</p><p>I believe there is value in having a lot of different experience that allows you to bring new and interesting perspectives into new roles. I hope to drive security changes and work toward making positive contributions to the risk posture of my future employers to provide security for customers and the company. Finally, I hope to promote security awareness and the importance of good cyber hygiene throughout the organization.</p></div>
    </section>
  </>;
}

function PageIntro({ number, eyebrow, title, children }) { return <section className="page-intro section-pad"><div className="section-label"><span>{number}</span><span>{eyebrow}</span></div><div><h1>{title}</h1>{children && <p className="page-lede">{children}</p>}</div></section>; }

function Projects() {
  return <><PageIntro title={<>Projects</>} ></PageIntro><section className="project-list section-pad">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-heading"><div><span className="card-tag">{project.tag}</span><h2>{project.title}</h2></div></div><div className="project-details"><Detail label="Description" text={project.description} /><Detail label="My role" text={project.role} /><Detail label="Skills gained" text={project.skills} /><Detail label="Resources used" text={project.resources} />{project.demoLink && <div className="detail"><span>Demo</span><p><a className="resource-link" href={project.demoLink.url} target="_blank" rel="noreferrer">{project.demoLink.label}</a></p></div>}</div></article>)}</section></>;
}

function SeniorDesign() {
  return <>
    <PageIntro title={<>Senior Design</>} ></PageIntro>
    <section className="content-panel section-pad">
      <div className="panel-heading">
        <h2>AI Arcade</h2>
      </div>
      <div className="sd-grid">
        <Detail label="Description of project" text="AI Arcade builds on a working prototype that lets people describe changes to retro-games changes through natural language. The AI model modifies game files and validates them, so users can quickly play their ideas on a Raspberry Pi arcade cabinet without needing programming experience or technical knowledge. We are improving the authoring experience through user testing and focusing on safely integrating AI for a fun user experience. Our work focuses on understanding the prototype, researching users, setting baseline results, and prototyping. Then we will focus on safeguards, improving the AI through skills and tools, and further testing to deliver a functioning application." />
        <Detail label="Your role · Software Engineer and AI-integration Team" text="I develop, test, and integrate the AI component. I focus on user and game testing, creating skills and tools to improve the AI's performance, and researching and implementing security-focused application design." />
        <Detail label="Skills or knowledge gained" text="I am learning how to evaluate an AI authoring experience through user and game testing, build skills and tools that help an AI agent perform reliably, integrate AI into an application, and design practical security controls for AI-generated code." />
        <div className="detail"><span>Supporting Documents</span><p><a className="resource-link" href="/CPRE4910-Portfolio/documents/sdmay27-06_lightning_talk.pptx" download>Lightning Talk ↘</a><br /><a className="resource-link" href="/CPRE4910-Portfolio/documents/sdmay27-06_Design_Document.docx" download>Design Document ↘</a></p></div>
        <Detail label="Big picture contribution" text="AI Arcade aims to remove technical barriers between a player's idea and a playable game. It enables creativity, while addressing the security, validation, and responsible-use risks of user-created content." />
      </div>
    </section>
  </>;
}

function Experience() { return <><PageIntro title={<>Experience</>} ></PageIntro><section className="experience-layout section-pad"><aside><span className="card-tag">Internship / Co-op</span><h2>Information Security Engineer Intern</h2><p>Principal Financial Group<br />Identity and Access Management</p></aside><div className="experience-sections"><Detail label="Duties and projects" text="I engineered serverless AWS pipelines and identity-matching algorithms to migrate 241,000 accounts into SailPoint Identity Security Cloud. I also built schemas and cloud infrastructure to seed 62,000 legacy entitlements into a centralized IAM database, and collaborated across teams to develop an automated provisioning API serving 70,000 users using SQL data insights." /><Detail label="Technical and soft skills learned" text="This experience strengthened my skills in AWS serverless architecture, IAM, SailPoint Identity Security Cloud, identity matching, database schema design, entitlement migration, API development, SQL analysis, cloud infrastructure, and cross-functional collaboration." /><Detail label="Evaluations and presentations" text="I have continued the work performing presentations periodically to the IAM department. I received positive feedback for my contributions throughout the summer and was offered a full-time position at the end of the summer." /></div></section></>; }

function Reflections() { return <><PageIntro title={<>Reflections</>} ></PageIntro><section className="document-grid section-pad"><DocumentCard title="General Education Reflection" file="general-education-reflection.pdf" /><DocumentCard title="Cumulative Reflection" file="cumulative-reflection.pdf" /><DocumentCard title="Ethics Paper" file="ethics-paper.pdf" /></section></>; }

function Resume() { return <><PageIntro title={<>Resume</>} ></PageIntro><section className="resume-viewer section-pad"><DocumentCard title="Resume" file="resume.pdf" /></section></>; }

function DocumentCard({ title, file, label }) { const path = `/CPRE4910-Portfolio/documents/${file}`; return <article className="document-card"><div className="document-heading"><div>{label && <span className="card-tag">{label}</span>}<h2>{title}</h2></div><a className="download-link" href={path} download>Download ↘</a></div><div className="pdf-frame"><iframe title={`${title} PDF`} src={path} /></div><p className="pdf-fallback">Add <strong>public/documents/{file}</strong> to display this document here. The reader will also allow scrolling once the PDF is present.</p></article>; }

function Contact() { return <><PageIntro title={<>Contact Me</>} >Please reach out with any questions you might have!</PageIntro><section className="contact-layout section-pad"><div><a className="email-link" href="mailto:astoner@iastate.edu">astoner@iastate.edu <span>↗</span></a></div><div className="contact-details"><Detail label="Phone" text="319-243-0109" /><Detail label="Location" text="Ames, Iowa" /><Detail label="LinkedIn" text="linkedin.com/in/alex-stoner-67a24928b/" /><Detail label="GitHub" text="github.com/alexstoner10" /></div></section></>; }

function Detail({ label, text }) { return <div className="detail"><span>{label}</span><p>{text}</p></div>; }

export default App;
