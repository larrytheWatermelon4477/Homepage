
import photo from "../assets/IMG_3646.jpg"

function About() {
  return (
    <main className="about">
      <section className="about-me">
        <img src={photo} alt="Photo of Sanai" className="profile-photo" />
        <div>
          <h1>Hi, I'm Sanai</h1>
          <p>
            I'm a Computer Science student interested in software development, data visualization,
            and building useful techniclogical tools that can be benefical for the public well-being.
            I am interested in going to graduate school to pursue a Masters in Health Informatics/Bioinformatics
            and Public Health. I would really like to make an impact in the real-world by finding solutions for major
            health and environmental issues people face daily with the help of technology.
          </p>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Software Intern · Florida Department of Health (FDOH)</h3>
            <span className="dates">2026 – Present</span>
            <p>Validate and geocode public health data using Excel, Logi and geocoding software to support FDOH Health CHARTS.</p>
          </li>
          <li>
            <h3>BA in Computer Science · Florida State University</h3>
            <span className="dates">2024 – 2027</span>
            <p>Current Coursework: Data Visualization,
                                   Future Edge Networks,
                                   Secure Parallel... in Python,
                                   Software Engineering Capstone,
                                   Programming Languages,
                                   German Cinema
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default About;