import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FiInstagram, FiTwitter } from "react-icons/fi";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

export default function UserInfo() {
  // const {login} = useSelector((state) => state)
  // const dispatch = useDispatch()
  return (
    <>
      <UserCard>
        <UserCardImg
          src="https://data.whicdn.com/images/324294713/original.png"
          className="w-50"
        />
        <UserCardBody>
          <Card.Title>username</Card.Title>
          <Card.Text>seenlist</Card.Text>
        </UserCardBody>
        <UserCardBody>
          <Card.Title>joindate</Card.Title>
          <Card.Text>favlist</Card.Text>
        </UserCardBody>
        <SocialDiv>
          <SocialLink to=" ">
            <FiInstagram />
          </SocialLink>
          <SocialLink to=" ">
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
  border: 2px solid darkgray;
  border-radius: 200px;
`;

const UserCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
