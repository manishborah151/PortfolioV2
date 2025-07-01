import "./navBar.css";
import {useRef} from "react";
import {scaleValue} from "../utils/scale";
import uselocalstorage from "use-local-storage";
import {
  Home,
  User,
  Folder,
  Mail,
  Github,
  Linkedin,
  FileText,
  Moon,
  Sun,
} from "lucide-react";

const maxAdditionalSize = 5;

function NavBar() {
  const dockRef = useRef(null);

  const handleAppHover = (ev) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`
    );
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: "smooth"});
  };

  const [theme, setTheme] = uselocalstorage("theme", "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const Items = [
    {icon: <Home size={18} />, tooltip: "Home", target: "home"},
    {icon: <User size={18} />, tooltip: "About", target: "about"},
    {
      icon: <Folder size={18} />,
      tooltip: "Projects",
      target: "projects",
    },
    {icon: <Mail size={18} />, tooltip: "Contact", target: "contact"},
  ];
  const ExternalItems = [
    {
      icon: <Github size={18} />,
      tooltip: "Github",
      target: "https://github.com/manishborah151/",
    },
    {
      icon: <Linkedin size={18} />,
      tooltip: "Linkedin",
      target: "https://www.linkedin.com/in/manish-borah-59a16423b/",
    },
    {
      icon: <FileText size={18} />,
      tooltip: "Resume",
      target:
        "https://drive.google.com/file/d/16oODBUkgPd16F8BqMS7eOFfoEy4Z_J-4/view?usp=drivesdk",
    },
  ];
  return (
    <div className="page">
      <div className="container">
        <nav ref={dockRef} className="dock">
          <ul>
            {Items.map((app, index) => (
              <li className="appIcon" onMouseMove={handleAppHover} key={index}>
                <a
                  onClick={() => handleScroll(app.target)}
                  rel="noopener noreferrer"
                >
                  {app.icon}
                  <span className="tooltip">{app.tooltip}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav ref={dockRef} className="dock externalDock">
          <ul>
            <ul>
              {ExternalItems.map((app, index) => (
                <li
                  className="appIcon"
                  onMouseMove={handleAppHover}
                  key={index}
                >
                  <a
                    href={app.target}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {app.icon}
                    <span className="tooltip">{app.tooltip}</span>
                  </a>
                </li>
              ))}
              <li className="appIcon" onMouseMove={handleAppHover}>
                <a
                  className="theme-toggle"
                  onClick={toggleTheme}
                  data-tooltip="Theme Toggle"
                  target="_blank"
                >
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                  <span className="tooltip">Toggle Theme</span>
                </a>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
