import { useEffect } from "react";
import "./PreLoader.css";
import { preLoaderAnim } from "./index.jsx";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Researcher,</span>
        <span>Vibe.</span>
      </div>
    </div>
  );
};

export default PreLoader;
