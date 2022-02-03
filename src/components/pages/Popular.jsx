import { useQuery } from "react-query";
import { fetchPopularMovies } from "../../data";
import { Button, Col, Container, Row } from "react-bootstrap";
import SortFilter from "../SortFilter";
import MovieCard from "../MovieCard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function TopRated() {
  const [size, setSize] = useState(4);
  const { filtered } = useSelector((state) => state);

  const { data } = useQuery(["movies"], () => fetchPopularMovies(), {
    retry: false,
    select: (data) => data.data.results,
  });


  useEffect(() => {
    setSize(4)
  }, [data])

  function loadMoreMovies() {
    if (data.length > size) {
      setSize(size + 4);
    }
  }

  if (filtered[0]?.results?.length > 0) {
    return (
      <Container>
        <Row>
          <Col className=" align-self-start mt-5 mx-3" xs={3}>
            <SortFilter />
          </Col>
          <Col>
            <Row>
              <h1 className="text-center  ">Popular Movies</h1>
              {filtered[0]?.results
                ?.map((item, i) => (
                  <Col key={i} xs={12} md={4} lg={3}>
                    <MovieCard item={item} />
                  </Col>
                ))
                .slice(0, size)}
            </Row>
            <Button
              id="loadmorebutton"
              className="m-3"
              variant="secondary"
              onClick={loadMoreMovies}
            >
              Load More
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="align-self-start mt-5 mx-3" xs={3}>
            <SortFilter  />
          </Col>
          <Col>
            <Row>
              <h1 className="text-center  ">Popular Movies</h1>
              {data
                ?.map((item, i) => (
                  <Col key={i} xs={12} md={4} lg={3}>
                    <MovieCard item={item} />
                  </Col>
                ))
                .slice(0, size)}
            </Row>
            <Button
              id="loadmorebutton"
              className="m-3"
              variant="secondary"
              onClick={loadMoreMovies}
            >
              Load More
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
