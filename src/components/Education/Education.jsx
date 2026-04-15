import "./Education.css";

function Education() {

  const education = [
    {
      title: "B.Tech in Computer Science",
      place: "HYDERABAD INSTITUTE OF TECHNOLOGY AND MANAGEMENT",
      year: "2023 - 2027",
      desc: "Focused on AI, Machine Learning, Web Development and System Design."
    },
    {
      title: "Intermediate (12th)",
      place: "Sri chaitanya",
      year: "2021 - 2023",
      desc: "Mathematics, Physics, Chemistry with strong analytical foundation."
    },
    {
      title: "Schooling",
      place: "Sri Chaitanya Tecchno School",
      desc: "Built strong fundamentals and developed interest in technology."
    }
  ];

  return (
    <section className="education-section">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      <h2 className="education-title">Education</h2>

      <div className="timeline">

        {education.map((item, index) => (
          <div key={index} className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h3>{item.title}</h3>
              <h4>{item.place}</h4>
              <span>{item.year}</span>
              <p>{item.desc}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Education;