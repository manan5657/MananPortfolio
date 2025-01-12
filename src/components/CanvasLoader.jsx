import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh", // Full screen height to center loader
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>

      {/* Progress Bar */}
      <div
        style={{
          width: "80%", // Width of the progress bar
          height: "4px", // Height of the progress bar
          background: "#ddd", // Light grey background
          borderRadius: "2px", // Rounded corners
          marginTop: "20px", // Spacing between text and bar
        }}
      >
        <div
          style={{
            width: `${progress}%`, // Fill the progress bar based on the progress
            height: "100%",
            background: "linear-gradient(45deg, #ff00f6, #00f6ff)", // Gradient color
            borderRadius: "2px",
            transition: "width 0.5s ease-in-out", // Smooth transition
          }}
        ></div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
