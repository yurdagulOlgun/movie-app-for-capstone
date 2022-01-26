import { useQuery } from "react-query";
import { fetchDiscoverMovies } from "../data";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

export default function Discover() {
  const { data } = useQuery("movies", fetchDiscoverMovies, {
    retry: false,
    select: (data) => data.data.results,
  });

  var settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <>
      <Slider {...settings}>
        {data?.map((item) => (
          <Col key={item.id} xs={12} md={4} lg={3}>
            <MovieCard item={item} />
          </Col>
        ))}
      </Slider>
    </>
  );
}
