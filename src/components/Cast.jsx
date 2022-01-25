import { fetchCast } from "../data";
import { useQuery } from "react-query";
import { Card, Col } from "react-bootstrap";

export default function Cast({ movieId }) {
  const { data } = useQuery(
    ["movies cast ", movieId],
    () => fetchCast(movieId),
    {
      retry: false,
      select: (data) => data.data,
    }
  );

  return (
    <>
      <Card.Title>Movie Crew</Card.Title>
      <Card.Text>
        {data?.crew
          ?.map((item, index) => (
            <p key={index}>
              {item?.name} <strong>-</strong> {item?.known_for_department}
            </p>
          ))
          .slice(0, 3)}
      </Card.Text>
      <Card.Title>Movie Cast</Card.Title>
      {data?.cast?.map((item, index) => (
          <Col key={index} xs={12} md={4} lg={3} className="d-flex justify-content-between">
           <Card className="m-2" >
          <Card.Img
            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
            className="w-100 "
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
        </Card>
          </Col>
       
      )).slice(0,4)
      }
    </>
  );
}
