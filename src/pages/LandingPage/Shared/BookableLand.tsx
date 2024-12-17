import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import photo1 from "../../../assets/images/card1.jpg";
import photo2 from "../../../assets/images/card2.jpg";
import photo3 from "../../../assets/images/card3.jpg";

const BookableLand = () => {
  const slides = [
    {
      id: 1,
      imgUrl: photo1,
      title: "Conference Room 1",
    },
    {
      id: 2,
      imgUrl: photo2,
      title: "Conference Room 2",
    },
    {
      id: 3,
      imgUrl: photo3,
      title: "Conference Room 3",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-page">
      <div className="carousel-slider">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="carousel-slide">
              <img
                src={slide.imgUrl}
                alt={slide.title}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="carousel-text">
        <h2>Versatile Meeting Spaces Tailored to Your Needs</h2>
        <p>
          Whether you need a cozy small room or a spacious classroom, we offer
          meeting spaces in a variety of sizes and layouts. Discover rooms
          equipped with amenities like TVs, phones, whiteboards, and video
          conferencing tools to enhance your experience.
        </p>
      </div>
    </div>
  );
};

export default BookableLand;
