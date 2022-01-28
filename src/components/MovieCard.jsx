import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../reduxStore/user";


export default function MovieCard({ item }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const isFav = user?.some((fav) => fav.id === item.id);

  return (
    <>
      <Card className="m-2">
        <Link
          to={`${item.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            className="w-100"
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.release_date}</Card.Text>
          </Card.Body>
        </Link>
        {isFav ? (
          <AiFillStar onClick={() => dispatch(removeFavorite(item.id))} />
        ) : (
          <AiOutlineStar
            onClick={() =>
              dispatch(
                addFavorite(
                  item.id,
                  item.title,
                  item.poster_path,
                  item.release_date
                )
              )
            }
          />
        )}
      </Card>
    </>
  );
}
