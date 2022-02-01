import { useQuery } from "react-query";
import { fetchTrendDayMovies } from "../data";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

export default function Trending({trend}) {
  const { data } = useQuery(["trend movies ",trend],() => fetchTrendDayMovies(trend), {
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
      <Slider {...settings} className="mb-5 mt-2">
        {data?.map((item) => (
          <Col key={item.id} xs={12} md={4} lg={3}>
            <MovieCard item={item} />
          </Col>
        ))}
      </Slider>
    </>
  );
}
