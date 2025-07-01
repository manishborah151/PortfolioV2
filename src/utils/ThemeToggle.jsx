import uselocalstorage from "use-local-storage";
import {Sun, Moon} from "lucide-react";

export default function ThemeToggle() {
  const [theme, settheme] = uselocalstorage("theme", "light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    settheme(newTheme);
  };

  return (
    <a
      className="theme-toggle"
      onClick={toggleTheme}
      data-tooltip="Theme Toggle"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </a>
  );
}
