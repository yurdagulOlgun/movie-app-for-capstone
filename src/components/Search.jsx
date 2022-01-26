import "../index.css";

function Search(props) {
  const { q, setQ, inputRef } = props;
  function inputHandler(event) {
    setTimeout(() => {
      setQ(event.target.value);
    }, 300);
  }

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

