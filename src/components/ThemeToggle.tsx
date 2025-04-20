
import { Moon, Sun } from "lucide-react";
import { Button } from "react-bootstrap";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="link"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      style={{
        borderRadius: '50%',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.5s',
        background: 'transparent',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: theme === 'dark' ? 0.2 : 0,
        transition: 'opacity 0.5s',
        background: 'linear-gradient(to right, rgba(155, 135, 245, 0.05), transparent)'
      }}></div>
      <Sun 
        style={{
          height: '1.2rem',
          width: '1.2rem',
          transform: theme === 'dark' ? 'rotate(-90deg) scale(0)' : 'rotate(0) scale(1)',
          transition: 'all 0.3s'
        }} 
      />
      <Moon 
        style={{
          position: 'absolute',
          height: '1.2rem',
          width: '1.2rem',
          transform: theme === 'dark' ? 'rotate(0) scale(1)' : 'rotate(90deg) scale(0)',
          transition: 'all 0.3s'
        }} 
      />
    </Button>
  );
}
