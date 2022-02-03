import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import { changeThemeAction } from "../../reduxStore/themeChanger";
import { userLogout } from "../../reduxStore/user";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
  const { changeTheme, login } = useSelector((state) => state);
  const themeName = changeTheme ? "light" : "dark";

  function clickHandler(event) {
    // if (event.target.id === "themebutton") {
    // }
    setTheme(!theme);
    dispatch(changeThemeAction(theme));
  }
  return (
    <Nav theme={themeName}>
      <Menu theme={themeName}>
        <MenuLink href="/" theme={themeName}>
          Home
        </MenuLink>
        <MenuLink
          dropdownToggle
          onClick={() => setHidden(!hidden)}
          theme={themeName}
        >
          Movies
        </MenuLink>
        <MenuLink
          href="popular"
          hidden={hidden}
          toggle={() => setHidden(!hidden)}
          theme={themeName}
        >
          Popular
        </MenuLink>
        <MenuLink
          href="top-rated"
          hidden={hidden}
          toggle={() => setHidden(!hidden)}
          theme={themeName}
        >
          Top Rated
        </MenuLink>
        
        {login?.login && (
          <StyledLink to="/profile" theme={themeName}>
            Profile
          </StyledLink>
        )}
      </Menu>
      <Menu2>
        {login?.login && <UserIcon src={`${login.avatarUrl}`} />}
        {login?.login ? (<StyledLink to="/" theme={themeName} onClick={()=> dispatch(userLogout(false)) }>
          Logout
        </StyledLink>) : (<StyledLink to="/login" theme={themeName}>
          Login
        </StyledLink>)}
        <ThemeButton
          id="themebutton"
          variant="outline"
          onClick={clickHandler}
          theme={themeName}
        >
          {theme ? <BiToggleRight size="1.5rem"/> : <BiToggleLeft size="1.5rem" />}
        </ThemeButton>
        
      </Menu2>
    </Nav>
  );
};

export default Navbar;

const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${(props) => (props.theme === "light" ? "#14213D" : "#FCA311")};
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: ${({ theme }) => (theme === "light" ? "#FF5400" : "#390099")};
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => (theme === "light" ? "#14213D" : "#FCA311")};
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: ${({ theme }) => (theme === "light" ? "#FF5400" : "#390099")};
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${({ theme }) =>
    theme === "light" ? "#FFBD00" : "#9E0059"};
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ThemeButton = styled(Button)`
  display: flex;
  color: ${({ theme }) => (theme === "light" ? "#14213D" : "#FCA311")};
  border: 0;
  padding: 0;
`;

const UserIcon = styled.img`
  padding: 6px;
  width: 10%;
  margin-left: 0;
`;

const Menu2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;