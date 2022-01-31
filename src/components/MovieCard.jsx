import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../reduxStore/favorite";
import { addSeenList, removeSeenList } from "../reduxStore/seenList";
import { IoVideocam, IoVideocamOutline } from "react-icons/io5";
import styled from "styled-components"


export default function MovieCard({ item }) {
  const dispatch = useDispatch();
  const { favorites, seenList, changeTheme } = useSelector((state) => state);

  const isFav = favorites?.films?.some((fav) => (fav.id === item.id));
  const isWatch = seenList?.seenFilms?.some((watch) => watch.id === item.id) 
  
  const themeName = changeTheme ? "light" : "dark"

  return (
    <>
      <CardStyle className="m-2" theme={themeName}>
        <Link
          to={`${item.id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            className="w-100"
          />
          <Card.Body>
            <CardTitle theme={themeName}>{item.title}</CardTitle>
            <CardText theme={themeName}>{item.release_date}</CardText>
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
        {
          isWatch ? ( <IoVideocam onClick={() => dispatch(removeSeenList(item.id))} /> ) :
          ( <IoVideocamOutline  onClick={() =>
            dispatch(
              addSeenList(
                item.id,
                item.title,
                item.poster_path,
                item.release_date
              )
            )
          }/> )
        }
      </CardStyle>
    </>
  );
}

const CardStyle = styled(Card)`
  background-color: ${({ theme }) => (theme === "light" ? "#FF5400" : "#390099")};
  color: ${({ theme }) => (theme === "light" ? "#14213D": "#FCA311"  )};
  padding: 1rem;
  border-radius: 5%;
  width: 90%;
  height: 90%;
`;

const CardTitle = styled(Card.Title)`
  color: ${({ theme }) => (theme === "light" ? "#14213D": "#FCA311"  )};
`;

const CardText = styled(Card.Text)`
   color: ${({ theme }) => (theme === "light" ? "#14213D": "#FCA311"  )};
`;