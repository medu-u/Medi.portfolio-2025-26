import React from "react";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <img
          src="../../assets/10004.jpg"
          alt="Hero"
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Medhanit Mulatu</h2>
          <p className={styles.heroSubtitle}>
            I’m <span className={styles.highlight}>Lecturer</span>
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <img
              src="../../assets/testimony/1653808204124.jpg"
              alt="Profile"
              className={styles.profileImage}
            />

            <div className={styles.aboutInfo}>
              <p>
                <strong>Name:</strong> Medhanit Mulatu Ketema
              </p>
              <p>
                <strong>Profile:</strong> Full Stack Developer | Electrical
                Power Engineer | Lecturer
              </p>
              <p>
                <strong>Email:</strong> medhanitmulatu6796@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> (+251) 963896796 / (+251) 799576796
              </p>
            </div>

            <div className={styles.skills}>
              <h4>Skills</h4>
              {[
                "HTML5",
                "CSS3",
                "Git",
                "Node.js",
                "Express.js",
                "React.js",
                "REST API",
                "MySQL",
                "React Router",
                "Python",
                "Bootstrap",
                "C++",
                "MATLAB",
                "Project Management",
              ].map((skill) => (
                <span key={skill} className={styles.skillItem}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.aboutRight}>
            <h3>About Me</h3>
            <p>
              I’m a Full Stack Developer with an interdisciplinary background in
              Electrical Power Engineering. I build scalable and efficient web
              applications using modern technologies.
            </p>
            <p>
              I’ve developed projects such as Evangadi Forum, Netflix Clone,
              Amazon-style e-commerce apps, and Apple-inspired landing pages.
            </p>
            <p>
              My strength lies in combining backend systems, clean UI/UX, and
              real-world problem solving.
            </p>
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section className={styles.resume}>
        <h2 className={styles.sectionTitle}>Resume</h2>

        <div className={styles.resumeGrid}>
          <div>
            <h3>Education</h3>

            <div className={styles.resumeItem}>
              <h4>MSc in Electrical Power Engineering</h4>
              <span>2023 – 2025</span>
              <p>Haramaya Institute of Technology</p>
            </div>

            <div className={styles.resumeItem}>
              <h4>Full Stack Web Development</h4>
              <span>2025 – 2026</span>
              <p>Evangadi Coding Academy</p>
            </div>
          </div>

          <div>
            <h3>Experience</h3>

            <div className={styles.resumeItem}>
              <h4>Lecturer – Haramaya University</h4>
              <span>2021 – Present</span>
              <p>
                Teaching Electrical Power Engineering, supervising research, and
                mentoring students.
              </p>
            </div>

            <div className={styles.resumeItem}>
              <h4>Web Developer</h4>
              <span>2025 – Present</span>
              <p>
                Built full-stack applications using React, Node.js, MySQL, and
                REST APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className={styles.portfolio}>
        <h2 className={styles.sectionTitle}>Portfolio</h2>

        <div className={styles.portfolioGrid}>
          {[
            {
              title: "Evangadi Forum",
              img: "/assets/img/portfolio/10001.jpg",
              desc: "Community Q&A platform",
            },
            {
              title: "Netflix Clone",
              img: "/assets/img/portfolio/10003.jpg",
              desc: "Movie browsing app",
            },
            {
              title: "Amazon Clone",
              img: "/assets/img/portfolio/10002.jpg",
              desc: "E-commerce platform",
            },
          ].map((item) => (
            <div key={item.title} className={styles.portfolioCard}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Contact</h2>

        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea rows="5" placeholder="Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default Main;
