import styled from "styled-components";
import { Card } from "react-bootstrap";
import { FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";
import { useSelector } from "react-redux";

export default function UserInfo() {
  const { login, favorites, seenList } = useSelector((state) => state);

  return (
    <>
      <UserCard>
        <UserCardImg src={`${login.avatarUrl}`} />
        <UserCardBody>
          <Card.Title>{login.username}</Card.Title>
          <CardText>Seen List: {seenList.count}</CardText>
          <CardText>Favorite List: {favorites.count}</CardText>
        </UserCardBody>
        <UserCardBody>
          <CardText>{login.joinDate}</CardText>
        </UserCardBody>
        <SocialDiv>
          <SocialLink href={`${login.socials.instagram}`}>
            <FiInstagram />
          </SocialLink>
          <SocialLink href={`${login.socials.twitter}`}>
            <FiTwitter />
          </SocialLink>
          <SocialLink href={`${login.socials.github}`}>
            <FiGithub />
          </SocialLink>
        </SocialDiv>
      </UserCard>
    </>
  );
}

const UserCard = styled(Card)`
padding: 30px;
  display: flex;
  flex-direction: row;
  border: 2px solid darkgray;
  border-radius: 50px 5px;
  justify-content: space-between;
`;

const UserCardImg = styled(Card.Img)`
  border: 0;
  border-radius: 200px;
  width: 25%;
`;

const UserCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardText = styled(Card.Text)`
  font-size: 0.8rem;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: black;
`;

const SocialDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-self: stretch;
`;
