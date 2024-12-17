import { useState, useEffect } from "react";
import { Button } from "antd";

import img1 from "../../../assets/images/header1.jpg";
import img2 from "../../../assets/images/header2.jpg";
import img3 from "../../../assets/images/header3.jpg";
import img4 from "../../../assets/images/header4.jpg";
import img5 from "../../../assets/images/header5.jpg";
import { useNavigate } from "react-router-dom";

const images = [img1, img2, img3, img4, img5]; // Array of images

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/meeting-room");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "80vh", // Increased height for better hero effect
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out", // Smooth transition
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
          zIndex: 1,
        }}
      ></div>

      {/* Text Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "white",
          padding: "0 20px",
          maxWidth: "800px", // Restrict text width for better readability
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)", // Enhance text visibility
          }}
        >
          Book Your Ideal Meeting Room with Ease
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.8",
            marginBottom: "2rem",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          Efficient, hassle-free room booking for all your meeting needs.
        </p>
        <Button
          onClick={handleBookNow}
          type="primary"
          size="large"
          style={{
            background: "#007BFF",
            color: "#fff",
            fontWeight: "bold",
            padding: "0.8rem 2rem",
            borderRadius: "8px",
            backgroundColor: "#0077B6",
            borderColor: "#0077B6",
          }}
        >
          Book Now
        </Button>
      </div>

      {/* Styles for Responsiveness */}
      <style>{`
        @media (max-width: 1024px) {
          h1 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1.2rem;
          }
          button {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
          button {
            font-size: 0.9rem;
            padding: 0.6rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.9rem;
          }
          button {
            font-size: 0.8rem;
            padding: 0.5rem 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
