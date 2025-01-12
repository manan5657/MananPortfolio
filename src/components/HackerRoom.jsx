import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF("/models/hacker-room.glb");
  const [videoTexture, setVideoTexture] = useState(null);
  const videoRef = useRef();

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "textures/desk/MB.mp4"; // Ensure the video file path is correct
    video.loop = true;
    video.muted = true;
    video.playsInline = true; // Helps with autoplay in some browsers
    video.crossOrigin = "anonymous"; // Avoid CORS issues
    video
      .play()
      .then(() => {
        const texture = new THREE.VideoTexture(video);
        texture.encoding = THREE.sRGBEncoding;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;

        setVideoTexture(texture);
      })
      .catch((error) => {
        console.error("Error playing video", error);
      });

    videoRef.current = video;

    // Cleanup function to stop video when component unmounts
    return () => {
      video.pause();
      video.src = "";
      videoRef.current = null;
    };
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}
      >
        {videoTexture && <meshBasicMaterial map={videoTexture} />}
      </mesh>
      <mesh
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />
      <mesh
        geometry={nodes.table_table_mat_0_1.geometry}
        material={materials.table_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_2.geometry}
        material={materials.computer_mat}
      >
        <meshMatcapMaterial map={useTexture("textures/desk/monitor.png")} />
      </mesh>
      <mesh
        geometry={nodes.table_table_mat_0_3.geometry}
        material={materials.server_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_4.geometry}
        material={materials.vhsPlayer_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_5.geometry}
        material={materials.stand_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_6.geometry}
        material={materials.mat_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_7.geometry}
        material={materials.arm_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_8.geometry}
        material={materials.tv_mat}
      >
        <meshMatcapMaterial map={useTexture("textures/desk/monitor.png")} />
      </mesh>
      <mesh
        geometry={nodes.table_table_mat_0_9.geometry}
        material={materials.cables_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_10.geometry}
        material={materials.props_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_11.geometry}
        material={materials.ground_mat}
      />
      <mesh
        geometry={nodes.table_table_mat_0_12.geometry}
        material={materials.key_mat}
      />
    </group>
  );
};

useGLTF.preload("/models/hacker-room.glb");

export default HackerRoom;
