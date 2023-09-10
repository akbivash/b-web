import  { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type TypeWriterProps = {
  text: string;
};

const Typewriter = ({ text }: TypeWriterProps) => {
  const [typedText, setTypedText] = useState("");
  const ref = useRef(null);
  const state = useIntersectionObserver(ref);
  const [isAlreadyTyped, setIsAlreadyTyped] = useState(false);

  useEffect(() => {
    if (ref.current && state?.isIntersecting && !isAlreadyTyped) {
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          setTypedText((prev) => prev + text[i]);
        }, 20 * i);
      }
      setIsAlreadyTyped(true);
    }
  }, [state]);

  return <div ref={ref}>{typedText}</div>;
};

export default Typewriter;
