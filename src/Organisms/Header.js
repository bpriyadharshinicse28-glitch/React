import { useEffect, useState } from "react";
import ThemeService from "../services/ThemeServices";

function Header() {
  const [theme, setTheme] = useState(ThemeService.getTheme());

  useEffect(() => {
    ThemeService.attach(setTheme);

    return () => {
      ThemeService.detach(setTheme);
    };
  }, []);

  return (
    <header
      style={{
        padding: 20,
        background: theme === "Light" ? "#ddd" : "#333",
        color: theme === "Light" ? "black" : "white",
      }}
    >
      <h2>Header - {theme} Theme</h2>
    </header>
  );
}
export default Header;