import { useSelector } from "react-redux";
import MovieCard from "../MovieCard";
import { Col, Container, Row } from "react-bootstrap";
import UserInfo from "../UserInfo";


export default function Profile() {
  const {favorites} = useSelector((state) => state);
  const {seenList} = useSelector((state) => state);


  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={9} md={5} lg={4}>
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
