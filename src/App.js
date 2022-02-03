import "./App.css";
import Footer from "./components/base/Footer";
import Navbar from "./components/base/Navbar";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

import styled from "styled-components"
import {useSelector} from "react-redux"

function App() {

  const { changeTheme } = useSelector((state) => state);
    const themeName = changeTheme ? "light" : "dark"


  return (
    <>
      <Navbar />
      <ThemeBody theme={themeName}>
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
      </ThemeBody>
      <Footer />
    </>
  );
}

export default App;

const ThemeBody = styled.body`
  background-color: ${({ theme }) => (theme === "light" ? "#F9C74F" : "#F9844A")};
  color: ${({ theme }) => (theme === "light" ? "#277DA1" : "#F94144")};
  margin-top: 0;
  margin-bottom: 0;
  height: fit-content;
`;