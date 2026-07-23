import { useEffect, useState } from "react";
import ThemeService from "../services/ThemeServices";
import Button from "../Atoms/Button";
import ThemeLabel from "../Molecles/ThemeLable";

function ThemePanel() {
  const [theme, setTheme] = useState(ThemeService.getTheme());
  

  useEffect(() => {
    ThemeService.attach(setTheme);

    return () => {
      ThemeService.detach(setTheme);
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <ThemeLabel theme={theme} />

      <Button
        title="Toggle Theme"
        onClick={() => ThemeService.toggleTheme()}
      />
    </div>
  );
}

export default ThemePanel;