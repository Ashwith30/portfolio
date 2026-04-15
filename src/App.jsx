import { useState, useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Background from "./components/Background/Background";
import Dock from "./components/Dock/Dock";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

function App() {

  const [section, setSection] = useState("home");

  const aboutRef = useRef(null);   // ✅ added

  return (
    <>
      <Background />

      <Navbar setSection={setSection} />

      {section === "home" && (
        <>
          <Hero setSection={setSection} aboutRef={aboutRef} />
          <About aboutRef={aboutRef} />
        </>
      )}

      {section === "skills" && <Skills />}
      {section === "education" && <Education />}
      {section === "projects" && <Projects />}
      {section === "contact" && <Contact />}
      {section === "resume" && <Resume />}

      <Dock />

    </>
  );
}

export default App;