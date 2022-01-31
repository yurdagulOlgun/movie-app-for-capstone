import { useSelector } from "react-redux";
// import MovieCard from "../MovieCard";
import { Col, Container, Row, Table } from "react-bootstrap";
import UserInfo from "../UserInfo";
import { AiFillStar } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";

export default function Profile() {
  const { favorites, seenList } = useSelector((state) => state);

  const movies = [...favorites?.films.concat(...seenList?.seenFilms)];
  
  // console.log(favorites?.films[0]?.id, movies[0]?.id);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={9} lg={6} className="mt-5">
            <UserInfo />
          </Col>
        </Row>
        <Table responsive>
          <thead>
            <tr>
              <th>Movie ID</th>
              <th>Movie Title</th>
              <th>Movie Genre</th>
              <th>Icons</th>
            </tr>
          </thead>
          <tbody>
            {movies?.map((item, i) => (
              <tr key={i}>
                <td >{item.id}</td>

                <td>{item.title}</td>

                <td>Genre </td>
                <td>{ item.id === favorites?.films?.id  && <AiFillStar/>  } {seenList?.seenFilms?.id === item.id && <IoVideocam/> }</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

{
  /* <Row className="mt-5">
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
        </Row>*/
}
