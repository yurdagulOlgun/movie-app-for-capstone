import { useQuery } from "react-query";
import { fetchTopRatedMovies } from "../../data";
import { Col, Container, Row } from "react-bootstrap";
import SortFilter from "../SortFilter";
import Slider from "react-slick";
import MovieCard from "../MovieCard";

export default function TopRated() {
  const { data } = useQuery("movies", fetchTopRatedMovies, {
    retry: false,
    select: (data) => data.data.results,
  });

  var settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col className=" border border-warning align-self-start mt-5" xs={3}>
            <SortFilter />
          </Col>
          <Col xs={9}>
            <h1 className="text-center ">Top Rated Movies</h1>
            <Slider {...settings}>
              {data?.map((item) => (
                <Col key={item.id} xs={12} md={4} lg={3}>
                  <MovieCard item={item} />
                </Col>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
}
