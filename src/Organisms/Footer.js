import { useEffect, useState } from "react";
import ThemeService from "../services/ThemeServices";

function Footer() {
  const [theme, setTheme] = useState(ThemeService.getTheme());

  useEffect(() => {
    ThemeService.attach(setTheme);

    return () => {
      ThemeService.detach(setTheme);
    };
  }, []);

  return (
    <footer
      style={{
        padding: 20,
        background: theme === "Light" ? "#ddd" : "#333",
        color: theme === "Light" ? "black" : "white",
      }}
    >
      Footer - Current Theme: {theme}
    </footer>
  );
}
export default Footer;