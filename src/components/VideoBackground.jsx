import React from "react";
import videoSrc from "/fondo.mp4";

const VideoBackground = () => {
  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    zIndex: -1,
  };

  return (
    <video autoPlay loop muted style={videoStyle}>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
