import { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import "../../sections/About.css";

const AnimatedGlobe = () => {
  const globeRef = useRef();
  const [markerPosition, setMarkerPosition] = useState({
    lat: 30.9297574,
    lng: 70.3935641,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      globeRef.current.pointOfView(
        { lat: markerPosition.lat, lng: markerPosition.lng }, // Set to your desired coordinate (example)
        2000 // 2 seconds for smooth transition
      );
    }, 2000); // Animation interval to keep rotating

    return () => clearInterval(interval); // Cleanup on unmount
  }, [markerPosition]);

  return (
    <div className="globe-container rounded-3xl w-full sm:h-[400px] h-fit flex justify-center items-center overflow-hidden shadow-lg -mt-20">
      <Globe
        ref={globeRef}
        height={410}
        width={410}
        backgroundColor="rgba(0, 0, 0, 0)"
        backgroundImageOpacity={0.4}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        markersData={[
          {
            lat: markerPosition.lat,
            lng: markerPosition.lng,
            color: "red", // You can adjust color as needed
            radius: 0.15, // Adjust size as needed
          },
        ]}
        onGlobeClick={({ lat, lng }) => setMarkerPosition({ lat, lng })}
      />
      {/* Avatar Pin with Tooltip */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="relative group w-12 h-12 rounded-full bg-gradient-to-r  shadow-xl hover:scale-110 transform transition-all duration-300"
          style={{
            position: "absolute",
            top: `${((markerPosition.lat + 90) / 180) * 100}%`, // Latitude to percentage
            left: `${((markerPosition.lng + 180) / 360) * 100}%`, // Longitude to percentage
          }}
        >
          {/* Avatar Image */}
          <img
            src="/assets/2.gif" // You can change this URL to any avatar image URL
            alt="Avatar"
            className="w-full h-full rounded-full object-cover"
          />
          {/* Tooltip */}
          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-3 w-32 bg-black text-white text-sm rounded-md p-2 bottom-[-35px] left-[-50%] translate-x-1/2 shadow-lg">
            Punjab, India
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGlobe;
