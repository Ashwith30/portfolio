import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">

      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">

        {/* LEFT INFO (optional but recommended) */}
        <div className="contact-info">
          <p>Let’s connect and build something amazing 🚀</p>

          <div className="contact-links">
            <a href="mailto:ashwith0530@gmail.com">Email</a>
            <a href="https://github.com/Ashwith30" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/ashwith-reddy-06a1b6290/" target="_blank">LinkedIn</a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form">

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;