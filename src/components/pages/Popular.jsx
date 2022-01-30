import { useQuery } from "react-query";
import { fetchPopularMovies } from "../../data";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import SortFilter from "../SortFilter";
import MovieCard from "../MovieCard";
import { useSelector } from "react-redux";

export default function TopRated() {
  const { data } = useQuery("movies", fetchPopularMovies, {
    retry: false,
    select: (data) => data.data.results,
  });

  const { filtered } = useSelector((state) => state);

  var settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  if (filtered[0]?.length > 0) {
    return <Container className="mt-3">
      <Row>
        <Col className=" border border-warning align-self-start mt-5" xs={3}>
          <SortFilter />
        </Col>
        <Col xs={9}>
          <h1 className="text-center  ">Popular Movies</h1>
          <Slider {...settings}>
          {filtered[0]?.map((item, i) => (
            <Col key={i} xs={12} md={4} lg={3}>
              <MovieCard item={item} />
            </Col>
          ))}
          </Slider>
        </Col>
      </Row>
    </Container>;
  }

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col className=" border border-warning align-self-start mt-5" xs={3}>
            <SortFilter />
          </Col>
          <Col xs={9}>
            <h1 className="text-center  ">Popular Movies</h1>
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
