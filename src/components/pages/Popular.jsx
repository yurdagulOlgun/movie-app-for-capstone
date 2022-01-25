import { useQuery } from "react-query";
import { fetchPopularMovies } from "../../data";
import { Col, Card, Container, Row, Dropdown  } from "react-bootstrap";

export default function TopRated() {
  const { data } = useQuery("movies", fetchPopularMovies, {
    retry: false,
    select: (data) => data.data.results,
  });

  return (
    <>
      <Container className="mt-3">
        <Row >
          <h1 className="text-center mb-3">Popular Movies</h1>
          <Col className=" border border-warning ">
            <Dropdown className="p-2">
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Sort By
              </Dropdown.Toggle>
              <Dropdown.Menu >
                <Dropdown.Item href="#/action-1" >Filmin başlığı A'dan Z'ye, </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Filmin başlığı Z'den A'ya, </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Popülerliği göre artan, </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Popülerliği göre azalan, </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Çıkış tarihine göre artan, </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Çıkış tarihine göre azalan</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Row>
              <Col> 
                <h3>Filter By</h3>
              </Col>
            </Row>
            
          </Col>
          {data?.map((item) => (
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
    </>
  );
}
