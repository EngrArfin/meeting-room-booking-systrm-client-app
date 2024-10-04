import background from "../../../assets/images/header1.jpg";
import { Button } from "antd";

const Demo1 = () => {
  return (
    <div>
      <div
        style={{
          height: "60vh",
          backgroundImage: `url(${background})`,
          // Replace with your banner image or video
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
          Book Your Ideal Meeting Room with Ease
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
          Efficient, hassle-free room booking for all your meeting needs.
        </p>
        <Button
          type="primary"
          size="large"
          href="/meeting-rooms"
          style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Demo1;
