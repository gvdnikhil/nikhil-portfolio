import { profile, skills, experience, projects, education, certifications } from "./data";
import headshot from "./assets/headshot.jpg";

const NAV = ["about", "experience", "skills", "projects", "education"];

function SectionLabel({ index, children }) {
  return (
    <div className="section-label">
      <span className="section-index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="nav">
        <span className="nav-brand">nikhil<span className="accent">.</span></span>
        <nav>
          {NAV.map((id) => (
            <a key={id} href={`#${id}`}>
              {id}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <div className="hero-text">
            <p className="prompt fade-in d1">$ whoami</p>
            <h1 className="fade-in d2">
              {profile.name}
              <span className="accent">.</span>
            </h1>
            <p className="role fade-in d3">{profile.title} · {profile.location}</p>
            <p className="tagline fade-in d4">{profile.tagline}</p>
            <p className="summary fade-in d5">{profile.summary}</p>
            <div className="links fade-in d5">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <div className="hero-photo fade-in-scale">
            <div className="hero-photo-glow" />
            <img src={headshot} alt={profile.name} />
          </div>
        </section>

        <section id="experience">
          <SectionLabel index="01">experience</SectionLabel>
          <div className="timeline">
            {experience.map((job) => (
              <article key={job.role + job.period} className="job">
                <div className="job-head">
                  <div>
                    <h3>{job.company}</h3>
                    <p className="job-role">{job.role}</p>
                  </div>
                  <div className="job-meta">
                    <span>{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <ul>
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <SectionLabel index="02">skills</SectionLabel>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.group} className="skill-group">
                <h4>{group.group}</h4>
                <div className="chips">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <SectionLabel index="03">projects</SectionLabel>
          <div className="projects-grid">
            {projects.map((p) => (
              <article key={p.name} className="project-card">
                <div className="project-head">
                  <h3>{p.name}</h3>
                  {p.status && <span className="badge">{p.status}</span>}
                </div>
                <p className="project-stack">{p.stack}</p>
                <p>{p.description}</p>
                {p.link && (
                  <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                    View →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="education">
          <SectionLabel index="04">education &amp; certifications</SectionLabel>
          <div className="edu-cert">
            <div>
              <h3>{education.school}</h3>
              <p>{education.degree}</p>
              <p className="edu-period">{education.period}</p>
            </div>
            <div>
              {certifications.map((c) => (
                <div key={c.name}>
                  <h3>{c.name}</h3>
                  <p>{c.issuer}</p>
                  {c.link && (
                    <a href={c.link} target="_blank" rel="noreferrer">
                      Verify →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Built with React · <a href={profile.github} target="_blank" rel="noreferrer">source on GitHub</a>
        </p>
      </footer>
    </>
  );
}
