import "../index.css";
// import styled from "styled-components";
// import {useSelector} from "react-redux"

function Search(props) {
  const { q, setQ, inputRef } = props;
  function inputHandler(event) {
    setTimeout(() => {
      setQ(event.target.value);
    }, 300);
  }

  // const { changeTheme } = useSelector((state) => state);
  // const themeName = changeTheme ? "light" : "dark"

  return (
    <>
      <div className="col-md-4 ">
        <input 
          name="q"
          ref={inputRef}
          type="text"
          className="form-control"
          id="search"
          onChange={inputHandler}
          defaultValue={q}
          placeholder="search movies by title"
        />
      </div>
    </>
  );
}
export default Search;

// const StyledInput = styled.input`
//   background-color: ${({ theme }) => (theme === "light" ? "#FF5400" : "#390099")};
//   color: ${({ theme }) => (theme === "light" ? "#14213D": "#FCA311"  )};
// `;