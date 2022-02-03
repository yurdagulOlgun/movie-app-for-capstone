import { useQuery } from "react-query";
import { fetchTopRatedMovies } from "../../data";
import { Button, Col, Container, Row } from "react-bootstrap";
import SortFilter from "../SortFilter";
import MovieCard from "../MovieCard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


export default function TopRated() {
  const { filtered } = useSelector((state) => state);
  const [size, setSize] = useState(4);

  const { data } = useQuery(["movies"], () => fetchTopRatedMovies(), {
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
              <h1 className="text-center  ">Top-Rated Movies</h1>
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
            <SortFilter/>
          </Col>
          <Col>
            <Row>
              <h1 className="text-center  ">Top-Rated Movies</h1>
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
