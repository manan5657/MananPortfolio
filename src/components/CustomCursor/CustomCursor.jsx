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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className="cursor-svg"
        height="1em"
        width="1em"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#6a11cb", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#2575fc", stopOpacity: 1 }}
            />
          </linearGradient>

          <linearGradient
            id="gradient-hover"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#ff416c", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ff4b2b", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <path
          d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.457 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
          fill="url(#gradient)"
          stroke="url(#gradient)"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;

// // CustomCursor.jsx
// import { useEffect, useState } from "react";
// import "./CustomCursor.css";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [click, setClick] = useState(false);
//   const [pointer, setPointer] = useState(false);
//   const [visible, setVisible] = useState(true);

//   const addEventListeners = () => {
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("mouseup", onMouseUp);
//     document.querySelectorAll("a, button").forEach((el) => {
//       el.addEventListener("mouseenter", onPointerEnter);
//       el.addEventListener("mouseleave", onPointerLeave);
//     });
//     window.addEventListener("mouseout", onMouseLeave);
//     window.addEventListener("mouseover", onMouseEnter);
//   };

//   const onMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   const onMouseDown = () => setClick(true);
//   const onMouseUp = () => setClick(false);
//   const onPointerEnter = () => setPointer(true);
//   const onPointerLeave = () => setPointer(false);
//   const onMouseLeave = () => setVisible(false);
//   const onMouseEnter = () => setVisible(true);

//   useEffect(() => {
//     addEventListeners();
//     return () => {
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mousedown", onMouseDown);
//       document.removeEventListener("mouseup", onMouseUp);
//       window.removeEventListener("mouseout", onMouseLeave);
//       window.removeEventListener("mouseover", onMouseEnter);
//     };
//   }, []);

//   return (
//     <div
//       className={`custom-cursor ${click ? "click" : ""} ${
//         pointer ? "pointer" : ""
//       } ${visible ? "visible" : "hidden"}`}
//       style={{
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//       }}
//     >
//       <svg
//         width="50"
//         height="50"
//         viewBox="0 0 40 40"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <circle
//           cx="20"
//           cy="20"
//           r="12"
//           stroke="black"
//           strokeWidth="2"
//           fill="rgba(255, 255, 255, 0.8)"
//         />
//         <circle cx="20" cy="20" r="8" fill="rgba(255,255,255,.2)" />
//       </svg>
//     </div>
//   );
// };

// export default CustomCursor;
