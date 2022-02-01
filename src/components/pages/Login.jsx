import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { userLogin } from "../../reduxStore/user";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { login } = useSelector((state) => state);

  const navigate = useNavigate();
  console.log(login.login);

  useEffect(() => {
    if (login?.login) {
      navigate("/");
    }
  }, [navigate, login]);
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <LoginContainer >
        <FormBox onSubmit={handleSubmit} className="mt-5 ">
          <Icon src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>username</Form.Label>
            <Form.Control
              type="email"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              defaultValue={username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              defaultValue={password}
            />
          </Form.Group>
          <Button
            variant="warning"
            type="submit"
            onClick={() => dispatch(userLogin(username, password))}
          >
            Submit
          </Button>
        </FormBox>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const FormBox = styled.div`
  width: 380px;
  height: 450px;
  background-color: #91c483;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border-radius: 2%;
`;

const Icon = styled.img`
  display: flex;
  align-self: center;
  width: 50%;
`;
