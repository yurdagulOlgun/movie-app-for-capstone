import React, { useContext, useState } from "react";
import styled from "styled-components";
// import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  //   const { theme } = useContext(ThemeContext);
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <Nav>
        <Menu>
          <MenuLink href="/" >
            Home
          </MenuLink>
          <MenuLink href="/about" >
            About
          </MenuLink>
          <MenuLink dropdownToggle onClick={() => setHidden(!hidden)} >
            Movies
          </MenuLink>
          <MenuLink href="/popular" hidden={hidden} toggle={() => setHidden(!hidden)} >
            Popular
          </MenuLink>
          <MenuLink
            href="/top-rated"
            hidden={hidden}
            toggle={() => setHidden(!hidden)}
            
          >
            Top Rated
          </MenuLink> 
          <StyledLink to="/profile" >
            Profile
          </StyledLink>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;


const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #ffc900;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #ffc900;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
