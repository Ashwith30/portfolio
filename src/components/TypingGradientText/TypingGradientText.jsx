import { useEffect, useState } from "react";
import "./TypingGradientText.css";

function TypingGradientText({ text }) {

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 80); // typing speed

    return () => clearInterval(interval);

  }, [text]);

  return (
    <h1 className="typing-gradient">
      {displayText}
    </h1>
  );
}

export default TypingGradientText;