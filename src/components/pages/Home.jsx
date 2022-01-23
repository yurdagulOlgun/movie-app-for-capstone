import { useQuery } from "react-query";
import {
  fetchDiscoverMovies,
  fetchTrendDayMovies,
  fetchTrendWeekMovies,
} from "../../data";
import { useState } from "react";
import Search from "../Search";
import { Col, Container, Row, Card } from "react-bootstrap";

// import Pagination from "../Pagination";

export default function Home() {

  const { data } = useQuery("movies", fetchDiscoverMovies, {
    retry: false,
    select: (data) => data.data.results,
  });

//   const { data2 } = useQuery("movies yo", fetchTrendDayMovies, {
//     retry: false,
//     select: (weekdata) => weekdata.data.results,
//   });

//   const { weekdata } = useQuery("movies", fetchTrendWeekMovies, {
//     retry: false,
//     select: (data) => data.data.results,
//   });

  const [q, setQ] = useState([]);
  //   const [movieData, setMovieData] = useState([]);
  //   const [offset, setOffset] = useState(0);

  return (
    <>
      <Container>
        <Row className="m-3 row justify-content-md-center">
          <Col md={{ span: 12, offset: 6 }}>
            <Search q={q} setQ={setQ} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <h3>Discover</h3>
          {data
            ?.filter((data) => data.title.toLowerCase().includes(q))
            .map((item) => (
              <Col key={item.id} xs={12} md={4} lg={3}>
                <Card className="m-2">
                  <Card.Img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    className="w-100"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.release_date}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
        <Row>
          <h3>Trending</h3>
          {data
            ?.filter((data) => data.title.toLowerCase().includes(q))
            .map((item) => (
              <Col key={item.id} xs={12} md={4} lg={3}>
                <Card className="m-2">
                  <Card.Img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    className="w-100"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.release_date}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>

      {/* <Pagination
        movieData={movieData}
        setMovieData={setMovieData}
        offset={offset}
        setOffset={setOffset}
      /> */}
    </>
  );
}
