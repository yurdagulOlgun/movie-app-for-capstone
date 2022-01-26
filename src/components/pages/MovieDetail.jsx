import { useParams } from "react-router-dom";
import { Container, Row, Card, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import { fetchDetail } from "../../data";
import Cast from "../Cast";
import Reviews from "../Reviews";
import Recommendations from "../Recommendations";

export default function MovieDetail(props) {
  const params = useParams();
  const movieId = params.movieId;
  console.log(movieId);
  const { data } = useQuery(
    ["detail movies ", movieId],
    () => fetchDetail(movieId),
    {
      retry: false,
      select: (data) => data.data,
    }
  );

  return (
    <>
      <Container>
        <Row>
          <Card
            className="m-2 "
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Card.Img
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              className="w-100"
            />
            <Card.Body>
              <Card.Title>{data?.title}</Card.Title>
              <Card.Text>{data?.release_date}</Card.Text>
              <Card.Text style={{ display: "flex", flexDirection: "row" }}>
                {data?.genres?.map((item) => (
                  <p key={item.id}> | {item?.name} | </p>
                ))}
              </Card.Text>
              <Card.Title>Overview</Card.Title>
              <Card.Text>{data?.overview}</Card.Text>
              <Row>
                <Cast movieId={movieId} />
              </Row>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Reviews movieId={movieId} />
          <Recommendations movieId={movieId} />
        </Row>
      </Container>
    </>
  );
}
