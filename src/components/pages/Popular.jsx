import { useQuery } from "react-query";
import { fetchPopularMovies } from "../../data";
import { Button, Col, Container, Row } from "react-bootstrap";
import SortFilter from "../SortFilter";
import MovieCard from "../MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loadMoreData } from "../../reduxStore/loadMore";

export default function TopRated() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { moreData } = useSelector((state) => state);
  const { filtered } = useSelector((state) => state);

  const { data } = useQuery(["movies", page], () => fetchPopularMovies(page), {
    retry: false,
    select: (data) => data.data.results,
  });

  function loadMoreMovies(event) {
    if (event.target.id === "loadmorebutton") {
      setPage(page + 1);
      dispatch(loadMoreData(data));
      return (
        <>
          {moreData[0]
            ?.map((item, i) => (
              <Col key={i} xs={12} md={3} lg={2}>
                <MovieCard item={item} />
              </Col>
            ))
            .slice(0, 12).concat(...data, moreData)}
        </>
      );
    }
  }

  if (filtered[0]?.results?.length > 0) {
    return (
      <Container>
        <Row>
          <Col className=" border border-warning align-self-start mt-5" xs={3}>
            <SortFilter />
          </Col>
          {/* <Col xs={9}> */}
          <h1 className="text-center  ">Popular Movies</h1>
          {filtered[0]?.results?.map((item, i) => (
            <Col key={i} xs={12} md={4} lg={3}>
              <MovieCard item={item} />
            </Col>
          ))}
          {/* </Col> */}
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="align-self-start mt-5" xs={3}>
            <SortFilter />
          </Col>
          {/* <Col xs={3} > */}
          <h1 className="text-center  ">Popular Movies</h1>
          {data
            ?.map((item, i) => (
              <Col key={i} xs={12} md={3} lg={2}>
                <MovieCard item={item} />
              </Col>
            ))
            .slice(0, 12)}
          <Button id="loadmorebutton" onClick={loadMoreMovies}>
            Load More
          </Button>
          {/* </Col> */}
        </Row>
      </Container>
    </>
  );
}
