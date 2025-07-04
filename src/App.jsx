import NavBar from "./components/navBar";
import ProjectGrid from "./components/projectGrid";
import uselocalstorage from "use-local-storage";
import AboutWindow from "./components/aboutWindow";
import AnimatedSection from "./utils/animatedSection";
import "./App.css";

function App() {
  const [theme] = uselocalstorage("theme", "light");
  return (
    <div data-theme={theme}>
      <section className="hero-section" id="home">
        <div className="hey">
          Hey there <span className="waving-hand">👋</span>
        </div>
        <AnimatedSection>
          <div className="hero-content">
            <h2 className="hero-subTittle">I'm</h2>
            <div className="hero-Tittle">
              <svg
                height="140"
                stroke="var(--text-muted)"
                stroke-width="2"
                hero-tittle
                class="text-line "
                width="100%"
              >
                <text
                  x="50%"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  y="50%"
                >
                  MANISH BORAH
                </text>
              </svg>
            </div>
            <h2 className="hero-subTittle">
              A design-minded <span>Front-End Developer</span>
              <br /> focused on building beautiful interfaces & experiences.
            </h2>
          </div>
        </AnimatedSection>
      </section>
      <section className="about-section" id="about">
        <AnimatedSection>
          <div className="animateLineBox">
            <h2 className="section-title  ">About Me</h2>
            <div className="animated-line aboutLine"></div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <AboutWindow />
        </AnimatedSection>
      </section>
      <section className="project-section" id="projects">
        <AnimatedSection>
          <div className="animateLineBox">
            <h2 className="section-title">
              Here are few of my Favorite Projects
            </h2>
            <div className="animated-line"></div>
          </div>
        </AnimatedSection>
        <ProjectGrid />
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <AnimatedSection>
            <h1 className="hero-tittle contactMe">Contact ME</h1>
          </AnimatedSection>
          <div className="contact-info">
            <AnimatedSection>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("manishborah151@gmail.com");
                  alert("Email Copied 'manishborah151@gmail.com' ");
                }}
                className="email"
              >
                manishborah151@gmail.com
                <span className="tip">copy to clipboard</span>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("+916001419617");
                  alert("Phone number Copied '+916001419617' ");
                }}
                className="phone"
              >
                +91 6001 41 9617
                <span className="tip">copy to clipboard</span>
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <NavBar />
    </div>
  );
}

export default App;
