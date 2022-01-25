import { useQuery } from "react-query";
import { fetchPopularMovies } from "../../data";
import {
  Col,
  Card,
  Container,
  Row,
  Dropdown,
  DropdownButton,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useState } from "react";

export default function TopRated() {
  const { data } = useQuery("movies", fetchPopularMovies, {
    retry: false,
    select: (data) => data.data.results,
  });

  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <h1 className="text-center mb-3">Popular Movies</h1>
          <Col className=" border border-warning ">
            <DropdownButton
              variant="warning"
              alignRight
              title={`${value}` ? `${value}` : `sort by`}
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
              className="mt-4"
            >
              <Dropdown.Item eventKey="A to Z by The Title ">
                A to Z by The Title
              </Dropdown.Item>
              <Dropdown.Item eventKey="Z to A by The Title ">
                Z to A by The Title
              </Dropdown.Item>
              <Dropdown.Item eventKey="Increasing by Popularity">
                Increasing by Popularity
              </Dropdown.Item>
              <Dropdown.Item eventKey="Decreasing by Popularity">
                Decreasing by Popularity
              </Dropdown.Item>
              <Dropdown.Item eventKey="Increasing by Release Date">
                Increasing by Release Date
              </Dropdown.Item>
              <Dropdown.Item eventKey="Decreasing by Release Date">
                Decreasing by Release Date
              </Dropdown.Item>
            </DropdownButton>
            <Row className="mt-3">
              <div className=" d-flex flex-column">
                <h3>Filter By</h3>
               <label htmlFor="text" className="mt-3">From:</label>
               <label htmlFor="text" className="mt-3">To:</label>
              </div>
            </Row>
            <ButtonGroup size="sm" >
              <Button className="m-2" variant="warning">Action</Button>
              <Button className="m-2" variant="warning">Adventure</Button>
              <Button className="m-2" variant="warning">Comedy</Button>
            </ButtonGroup>
            <ButtonGroup size="sm">
              <Button className="m-2" variant="warning">Romance</Button>
              <Button className="m-2" variant="warning">Drama</Button>
              <Button className="m-2" variant="warning">Comedy</Button>
            </ButtonGroup>
            <ButtonGroup size="sm">
              <Button className="m-2" variant="warning">Horror</Button>
              <Button className="m-2" variant="warning">Science Fiction</Button>
              <Button className="m-2" variant="warning">War</Button>
            </ButtonGroup>
            <Col>
              <Button className="mt-5" variant="secondary" size="sm">Search</Button>
            </Col>
              
            
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
