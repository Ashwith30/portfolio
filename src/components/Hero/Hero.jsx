import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css";
import AnimatedButton from "../AnimatedButton/AnimatedButton";


function Hero({ setSection, aboutRef })  {

  const roleRef = useRef(null);

  useEffect(() => {

    if (!roleRef.current) return;

    const roleTyped = new Typed(roleRef.current, {
      strings: ["Coder", "AI Enthusiast", "Developer"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true
    });

    return () => roleTyped.destroy();

  }, []);

  return (
    <section className="hero">

      <div className="hero-heading">

  <p className="hero-intro">
    Hello, I'm
  </p>

  <h1 className="hero-name-dusky">
    Ashwith Reddy Nayini
  </h1>

</div>

      

      <p className="hero-role">
  I am a <span className="role-text" ref={roleRef}></span>
</p>

      <AnimatedButton
  onClick={() => {
    setSection("home");

    setTimeout(() => {
      aboutRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  }}
/>

    </section>
  );
}

export default Hero;