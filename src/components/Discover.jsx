import { useQuery } from "react-query";
import { fetchDiscoverMovies } from "../data";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function Discover() {

  
  const { data } = useQuery("movies", fetchDiscoverMovies, {
    retry: false,
    select: (data) => data.data.results,
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <>
    <Slider {...settings}>
      {data?.map((item) => (
        <Col key={item.id} xs={12} md={4} lg={3}>
          <Card className="m-2">
          <Link to={`${item.id}`} style={{ textDecoration: 'none' , color: "black"}}>
            <Card.Img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              className="w-100"
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.release_date}</Card.Text>
            </Card.Body></Link>
          </Card>
        </Col>
      ))}
      </Slider>
    </>
  );
}
