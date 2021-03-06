import { useQuery } from "react-query";
import { useRef, useState } from "react";
import Search from "../Search";
import { Col, Container, Row} from "react-bootstrap";
import Discover from "../Discover";
import Trending from "../Trending";
import { fetchSearchMovies } from "../../data";
import MovieCard from "../MovieCard";

export default function Home() {
  const [q, setQ] = useState("");
  const [trend, setTrend] = useState("day")
  const inputRef = useRef();
  const { data } = useQuery(["search movies ", q], () => fetchSearchMovies(q), {
    retry: false,
    select: (data) => data.data.results,
  });

  if (q !== "" && inputRef !== "") {
    return (
      <>
        <Container>
          <Row className=" row justify-content-md-center">
            <Col md={{ span: 12, offset: 6 }} className="m-3">
              <Search q={q} setQ={setQ} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {data
              ?.filter((data) =>
                data.title.toLowerCase().includes(q.toLowerCase())
              )
              .map((item) => (
                <Col key={item.id} xs={12} md={4} lg={3}>
            <MovieCard item={item} />
          </Col>
              ))}
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Row className=" row justify-content-md-center">
          <Col md={{ span: 12, offset: 6 }} className="m-3">
            <Search q={q} setQ={setQ}  />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-3">
          <h3>Discover</h3>
          <Discover />
        </Row>
        <Row className="mt-5">
          
            <Row>
              <Col md={2}>
                <h3>Trending--</h3>
              </Col>
            
           <Col md={{ span: 2}}> 
          <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) =>
            setTrend(e.target.options[e.target.selectedIndex].value)
          }
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          </select>
           </Col>
            </Row>
            
         
          
          <Trending trend={trend}/>
        </Row>
      </Container>
    </>
  );
}
