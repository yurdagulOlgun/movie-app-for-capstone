import { useParams } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { fetchDetail ,fetchCast} from "../../data";

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
  const { castData } = useQuery(
    ["movies cast ", movieId],
    () => fetchCast(movieId),
    {
      retry: false,
      select: (data) => data.data.crew,
    }
  );
console.log(castData);
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
              className="w-50"
            />
            <Card.Body>
              <Card.Title>{data?.title}</Card.Title>
              <Card.Text>{data?.release_date}</Card.Text>
              <Card.Text style={{ display: "flex", flexDirection: "row" }}>
                {data?.genres?.map((item) => (
                  <p key={item.id}> | {item?.name} | </p>
                ))}
              </Card.Text>
              <Card.Title>Movie Crew</Card.Title>
              <Card.Text>
                {castData?.crew?.map((item) => (
                  <h6 key={item.id}>
                    Name: {item?.name}-{item?.known_for_department}
                  </h6>
                ))}
              </Card.Text>
              <Card.Text>{data?.overview}</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
