import {animate, stagger} from "@motionone/dom";
import {splitText} from "motion-plus";
import {useEffect, useRef} from "react";

export default function SplitText() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const {words} = splitText(containerRef.current.querySelector("h1"));

      animate(
        words,
        {opacity: [0, 1], y: [10, 0]},
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <div className="hero-content" ref={containerRef}>
      <h1 className="h1 hero-ti">Manish Borah</h1>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
           
     
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
