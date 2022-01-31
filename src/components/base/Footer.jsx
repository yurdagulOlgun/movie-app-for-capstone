import styled from "styled-components"
import {useSelector} from "react-redux"

export default function Footer (props) {
    const { changeTheme } = useSelector((state) => state);
    const themeName = changeTheme ? "light" : "dark"



    return (
        <>
        <FooterStyle theme={themeName}>
            <footer class="pt-4  pt-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <h5 class="d-block mb-3 ">© Yurdagül OLGUN</h5>
      </div>
      <div class="col-12 col-md">
        <h5 class="d-block mb-3 "> Feb-2022</h5>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
      </div>
    </div>
  </footer></FooterStyle>
        </>
    )
}

const FooterStyle = styled.div`
    background-color: ${({ theme }) => (theme === "light" ? "#FFBD00" : "#9E0059")};
    color: ${({ theme }) => (theme === "light" ? "#14213D" : "#FCA311")};
`;