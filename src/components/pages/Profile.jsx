import { useSelector } from "react-redux";
import MovieCard from "../MovieCard";
import { Col, Container, Row } from "react-bootstrap";


export default function Profile({item}) {
  const {user} = useSelector((state) => state);


  return (
    <>
      <Container>
        <Row className="mt-5">
          <h1>Favorites</h1>
          {user?.favoriteList?.favoriteFilms?.map((item, index) => (
            <Col key={index} xs={12} md={4} lg={3}>
              <MovieCard item={item} />
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <h1>Seen</h1>
          {user?.seenList?.seenFilms?.map((item, index) => (
            <Col key={index} xs={12} md={4} lg={3}>
              <MovieCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
