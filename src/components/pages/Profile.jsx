import { useSelector } from "react-redux";
import MovieCard from "../MovieCard";
import { Col, Container, Row } from "react-bootstrap";
import UserInfo from "../UserInfo";


export default function Profile() {
  const {favorites, seenList} = useSelector((state) => state);


  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={9} lg={6}>
            <UserInfo/>
          </Col>
          
        </Row>
        <Row className="mt-5">
          <h1>Favorites</h1>
          {favorites?.films?.map((item, index) => (
            <Col key={index} xs={12} md={4} lg={3}>
              <MovieCard item={item} />
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <h1>Seen</h1>
          {seenList?.seenFilms?.map((item, index) => (
            <Col key={index} xs={12} md={4} lg={3}>
              <MovieCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
