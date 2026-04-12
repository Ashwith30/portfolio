import "./Navbar.css";

function Navbar({ setSection }) {

  return (
    <nav className="navbar">

      <ul className="nav-links">

        <li onClick={() => setSection("home")}>Home</li>

        <li onClick={() => setSection("projects")}>Projects</li>

        <li onClick={() => setSection("education")}>Education</li>

        <li onClick={() => setSection("skills")}>Skills</li>

        <li onClick={() => setSection("resume")}>Resume</li>

        <li onClick={() => setSection("contact")}>Contact</li>

      </ul>

    </nav>
  );
}

export default Navbar;