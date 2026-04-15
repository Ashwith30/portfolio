import "./About.css";

function About({ aboutRef }) {
  return (
    <section ref={aboutRef} className="about-section">

      <div className="about-container">

        {/* LEFT SIDE - TEXT */}
        <div className="about-text">

          <h2>About Me</h2>

          <p>
            I am a passionate Computer Science student focused on building
            intelligent AI-driven applications and modern web experiences.
            I enjoy solving real-world problems through clean architecture,
            data-driven insights, and innovative thinking.
          </p>

          <p>
            My interests include Artificial Intelligence, Machine Learning,
            Full Stack Development, and scalable system design. I constantly
            strive to learn new technologies and apply them in impactful projects.
          </p>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="about-image">

          <img src="/profile.jpg" alt="Profile" />

        </div>

      </div>

    </section>
  );
}

export default About;