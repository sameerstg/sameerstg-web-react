'use client'
import React from "react";

export default function Page() {
  const videos = [{ id: "-mbLgfKteow", title: "Iqraversity" }];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 1rem",
    gap: "2.5rem",
  };

  const cardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "900px",
    padding: "1rem",
    // backgroundColor: "#1a1a1a",
    borderRadius: "10px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "1.5rem",
  };

  const textStyle: React.CSSProperties = {
    color: "#d1d1d1",
    fontSize: "1.125rem",
    lineHeight: "1.6",
  };

  const smallTextStyle: React.CSSProperties = {
    color: "#a0a0a0",
    fontSize: "0.875rem",
    lineHeight: "1.5",
    marginTop: "1rem",
  };

  const videoContainerStyle: React.CSSProperties = {
    marginTop: "1.5rem",
    width: "100%",
    position: "relative",
    paddingTop: "56.25%", // 16:9 Aspect Ratio
  };

  const iframeStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#1e90ff",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Iqraversity</h1>
        <p style={textStyle}>
          Iqraversity is an innovative 3D model-based virtual environment designed to enhance digital
          learning by simulating a university experience similar to the metaverse. The project aims to
          bridge the gap between traditional and digital learning by providing an interactive, immersive,
          and engaging experience for students, faculty, and visitors.
        </p>
        <div style={smallTextStyle}>
          The system consists of a detailed 3D model of a university campus, incorporating various sections
          such as academic buildings, student lounges, libraries, laboratories, and administrative offices.
          Utilizing cutting-edge technologies such as Unity 3D, Blender, and Oculus VR, the platform allows
          users to seamlessly navigate the virtual university with real-time rendering and high-quality
          visual elements.
        </div>
        <div style={videoContainerStyle}>
          <iframe
            style={iframeStyle}
            title={videos[0].title}
            src={`https://youtube.com/embed/${videos[0].id}?rel=0&controls=1&showinfo=0&modestbranding=1`}
            allowFullScreen
          />
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1CSvHIc_xnMptNEV9j9BoV6YT3hYbbyLr/view?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1c86ee")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1e90ff")}
      >
        Download APK
      </a>
    </div>
  );
}
