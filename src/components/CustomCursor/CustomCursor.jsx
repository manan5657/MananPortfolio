// CustomCursor.jsx
import { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);
  const [pointer, setPointer] = useState(false);
  const [visible, setVisible] = useState(true);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onPointerEnter);
      el.addEventListener("mouseleave", onPointerLeave);
    });
    window.addEventListener("mouseout", onMouseLeave);
    window.addEventListener("mouseover", onMouseEnter);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => setClick(true);
  const onMouseUp = () => setClick(false);
  const onPointerEnter = () => setPointer(true);
  const onPointerLeave = () => setPointer(false);
  const onMouseLeave = () => setVisible(false);
  const onMouseEnter = () => setVisible(true);

  useEffect(() => {
    addEventListeners();
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseout", onMouseLeave);
      window.removeEventListener("mouseover", onMouseEnter);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${click ? "click" : ""} ${
        pointer ? "pointer" : ""
      } ${visible ? "visible" : "hidden"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="20"
          cy="20"
          r="12"
          stroke="black"
          strokeWidth="2"
          fill="rgba(255, 255, 255, 0.8)"
        />
        <circle cx="20" cy="20" r="8" fill="rgba(255,255,255,.2)" />
      </svg>
    </div>
  );
};

export default CustomCursor;
