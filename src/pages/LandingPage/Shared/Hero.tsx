import { Button } from "antd";
import img1 from "../../../assets/images/header1.jpg";
import img2 from "../../../assets/images/header2.jpg";
import img3 from "../../../assets/images/header3.jpg";
import img4 from "../../../assets/images/header4.jpg";
import img5 from "../../../assets/images/header5.jpg";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "60vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Carousel Wrapper */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Carousel Images */}
        <div
          style={{
            display: "flex",
            width: "500%", // 5 images, so 500% width
            animation: "slide-left 20s linear infinite", // Animation applied
          }}
        >
          <img
            src={img1}
            alt="Slide 1"
            style={{
              width: "20%", // Each image takes up 20% of the width
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={img2}
            alt="Slide 2"
            style={{
              width: "20%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={img3}
            alt="Slide 3"
            style={{
              width: "20%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={img4}
            alt="Slide 4"
            style={{
              width: "20%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <img
            src={img5}
            alt="Slide 5"
            style={{
              width: "20%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Hero Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 20px" }}>
        <h1
          style={{
            color: "yellow",
            fontSize: "3rem",
            marginBottom: "0.5rem",
            whiteSpace: "nowrap", // Prevents text from wrapping on small screens
          }}
        >
          Book Your Ideal Meeting Room with Ease
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            marginBottom: "2rem",
            whiteSpace: "nowrap",
          }}
        >
          Efficient, hassle-free room booking for all your meeting needs.
        </p>
        <NavLink to="/meeting-room">
          <Button
            type="primary"
            size="large"
            href="/booking-rooms"
            style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
          >
            Book Now
          </Button>
        </NavLink>
      </div>

      {/* Inline Keyframes for Animation */}
      <style>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
          
        }

        @media (max-width: 768px) {
          div[style*="60vh"] {
            height: 50vh;
          }

          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 1.2rem;
          }

          button {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          div[style*="60vh"] {
            height: 40vh;
          }

          h1 {
            font-size: 1rem;
          }

          p {
            font-size: 0.8rem;
          }

          button {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
