import { useQuery } from "react-query";
import { fetchTopRatedMovies } from "../../data";
import { Col, Card, Container, Row } from "react-bootstrap";



export default function TopRated() {
  const { data } = useQuery("movies", fetchTopRatedMovies, {
    retry: false,
    select: (data) => data.data.results,
  });

  return (<>
  <Container className="mt-3">
      <Row>
          <h1 className="text-center mb-3">Top Rated Movies</h1>
      {data
            ?.map((item) => (
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
    
  </>);
}
