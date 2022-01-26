import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MovieCard({ item }) {
  return (
    <>
      <Card className="m-2">
      <Link to={`${item.id}`} style={{ textDecoration: 'none' , color: "black"}}>
        <Card.Img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          className="w-100"
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.release_date}</Card.Text>
        </Card.Body></Link>
      </Card>
    </>
  );
}
