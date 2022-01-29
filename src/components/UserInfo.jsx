import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { useSelector } from "react-redux";


export default function UserInfo() {
  const {login, favorites, seenList} = useSelector((state) => state)
 
  return (
    <>
      <UserCard>
        <UserCardImg
          src="https://data.whicdn.com/images/324294713/original.png"
          
        />
        <UserCardBody>
          <Card.Title>{login.username}</Card.Title>
          <CardText>seen list: {seenList.count}</CardText>
          <CardText>favlist: {favorites.count}</CardText>
        </UserCardBody>
        <UserCardBody>
          <CardText>{login.joinDate}</CardText>
          
        </UserCardBody>
        <SocialDiv>
          <SocialLink to={`${login.socials.instagram}`}>
            <FiInstagram />
          </SocialLink>
          <SocialLink to={`${login.socials.twitter}`}>
            <FiTwitter />
          </SocialLink>
        </SocialDiv>
      </UserCard>
    </>
  );
}

const UserCard = styled(Card)`
  display: flex;
  flex-direction: row;
  border: 0;
`;

const UserCardImg = styled(Card.Img)`
  border: 0;
  border-radius: 200px;
  width: 40%;
`;

const UserCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CardText = styled(Card.Text)`
  font-size: 0.8rem;
`;

const SocialLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const SocialDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-self: stretch;
`;
