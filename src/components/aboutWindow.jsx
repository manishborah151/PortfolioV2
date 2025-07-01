import "./aboutWindow.css";
import SvgGrid from "./SvgGrid";

export default function AboutWindow() {
  return (
    <>
      <div className="window">
        <div className="header">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
        </div>
        <div className="windowArea">
          <p>
            I'm based in <span> Noida</span> with <span> 1.4 years</span> of
            work experience.
            <br />
            proficiently in <span> ReactJS</span> , <span>NextJS</span> and few
            other frameworks .
            <br />I have <span> 2 hands-on internships </span>.
            <br /> Collaborated in multiple <span> freelance works</span> for
            agencies.
          </p>
          <br />
          <h2> My Toolkit of Skills.</h2>
          <div className="sliderContainer">
            <SvgGrid />
          </div>
        </div>
      </div>
    </>
  );
}
