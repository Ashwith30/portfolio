import "./Resume.css";

function Resume() {
  return (
    <section className="resume-section">

      

      <div className="resume-viewer">
        <iframe
          src="/resume.pdf"
          title="Resume"
          width="100%"
          height="100%"
        ></iframe>
      </div>

    </section>
  );
}

export default Resume;