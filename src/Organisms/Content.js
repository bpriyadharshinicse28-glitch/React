import { useEffect, useState } from "react";
import ThemeService from "../services/ThemeServices";

function Content() {
  const [theme, setTheme] = useState(ThemeService.getTheme());

  useEffect(() => {
    ThemeService.attach(setTheme);

    return () => {
      ThemeService.detach(setTheme);
    };
  }, []);

  return (
    <div
      style={{
        padding: 40,
        background: theme === "Light" ? "#ffffff" : "#111111",
        color: theme === "Light" ? "#000" : "#fff",
      }}
    >
      <h3>Content Area</h3>

      <p>
        Theme changes automatically using Observer Pattern.
      </p>
    </div>
  );
}
export default Content;
