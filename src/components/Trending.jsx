import { useQuery } from "react-query";
import { fetchTrendDayMovies } from "../data";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

export default function Trending() {
  const { data } = useQuery("trend movies ", fetchTrendDayMovies, {
    retry: false,
    select: (data) => data.data.results,
  });
  var settings = {
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
