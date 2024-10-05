import { Card, Typography } from "antd";

const ServiceAdvertisement = () => {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }}>
      {/* Internal styles for right-to-left animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-5%);
          }
        }

        .scrolling-cards {
          display: inline-flex;
          animation: scroll 15s linear infinite;
        }

        .scrolling-cards > div {
          flex: 0 0 25%; /* Ensures 4 cards take up 100% of the container width */
          margin: 0 10px;
        }
      `}</style>

      {/* Service Advertisement Header */}
      <Typography.Text
        style={{
          color: "yellow",
          fontStyle: "italic",
          fontSize: "24px",
          paddingLeft: "10px",
          marginTop: "10px",
          marginBottom: "20px",
          display: "block",
        }}
      >
        Service Advertisement!
      </Typography.Text>

      {/* Scrolling Cards */}
      <div className="scrolling-cards">
        <div>
          <Card
            title="Real-Time Availability"
            bordered={false}
            style={{
              background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
              color: "#fff",
              height: "140px",
            }}
          >
            Time: {new Date().getFullYear()}
          </Card>
        </div>
        <div>
          <Card
            title="Instant Booking Confirmation"
            bordered={false}
            style={{
              background: "linear-gradient(135deg, #86a8e7, #91eae4)",
              color: "#fff",
              height: "140px",
            }}
          >
            Book Done
          </Card>
        </div>
        <div>
          <Card
            title="Flexible Scheduling"
            bordered={false}
            style={{
              background: "linear-gradient(135deg, #ff9966, #ff5e62)",
              color: "#fff",
              height: "140px",
            }}
          >
            9am - 10pm
          </Card>
        </div>
        <div>
          <Card
            title="24/7 Support"
            bordered={false}
            style={{
              background: "linear-gradient(135deg, #00b09b, #96c93d)",
              color: "#fff",
              height: "140px",
            }}
          >
            24 hours
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvertisement;
