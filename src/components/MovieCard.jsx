import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";
import FavSeen from "./FavSeen";

export default function MovieCard({ item }) {
  const { changeTheme, login } = useSelector((state) => state);

  const themeName = changeTheme ? "light" : "dark";

  return (
    <>
      <CardStyle className="m-2" theme={themeName}>
        <Link to={`${item.id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            className="w-100"
          />
          <Card.Body>
            <CardTitle theme={themeName}>{item.title}</CardTitle>
            <CardText theme={themeName}>{item.release_date}</CardText>
          </Card.Body>
        </Link>
        {
          login?.login && <FavSeen item={item} />
        }
        
      </CardStyle>
    </>
  );
}

const CardStyle = styled(Card)`
  background-color: ${({ theme }) =>
    theme === "light" ? "#FF5400" : "#390099"};
  color: ${({ theme }) => (theme === "light" ? "#14213D" : "#FCA311")};
  padding: 1rem;
  border-radius: 5%;
  width: 90%;
  height: 90%;
`;

const CardTitle = styled(Card.Title)`
  color: ${({ theme }) => (theme === "light" ? "#14213D" : "#FCA311")};
`;

const CardText = styled(Card.Text)`
  color: ${({ theme }) => (theme === "light" ? "#14213D" : "#FCA311")};
`;
