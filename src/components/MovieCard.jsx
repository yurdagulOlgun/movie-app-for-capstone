import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addFavorite } from "../reduxStore/user";


export default function MovieCard({ item }) {
  const movieId =item.id
  const dispatch = useDispatch()
  
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
          
        </Card.Body>
        </Link>
        <Link to="/profile"> profile</Link>
        <AiFillStar onClick={() => dispatch(addFavorite(movieId,item.title,item.poster_path,item.release_date))}  />
      </Card>
    </>
  );
}
