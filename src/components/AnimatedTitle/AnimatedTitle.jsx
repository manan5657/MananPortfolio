import { useEffect } from "react";

const AnimatedTitle = () => {
  useEffect(() => {
    const messages = [
      "Welcome to Manan's Portfolio",
      "Discover My Projects",
      "Explore My Skills",
      "Let's Connect!",
    ];
    let index = 0;

    const updateTitle = () => {
      document.title = messages[index];
      index = (index + 1) % messages.length;
    };

    const interval = setInterval(updateTitle, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return null; // This component doesn't render anything on the UI
};

export default AnimatedTitle;
