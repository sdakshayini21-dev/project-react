import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <h2>About Me</h2>

      <div className="about-content">

        <figure className="profile-figure">

          <img
            src="Dakshu.jpeg"
            alt=" profile"
          />

          <figcaption>
            Dakshayini.S
          </figcaption>

        </figure>

        <div className="about-text">

          <p>
            I love building things on the web. I am always eager to learn new
              technologies and stay up-to-date with the latest trends in web
              development.I’m a passionate and dedicated learner with a strong 
              interest in coding and programming. I genuinely enjoy exploring how 
              technology works and creating things through code. Currently, I’m learning 
              HTML, CSS, JavaScript, and React, and I’m excited to keep improving my 
              skills and exploring the world of web development. 💻✨
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;