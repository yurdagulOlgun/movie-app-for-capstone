import "../index.css";

function Search(props) {
  const { q, setQ } = props;
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
          type="text"
          className="form-control"
          id="search"
          onChange={inputHandler}
          defaultValue={q}
          placeholder="search beers by name"
        />
      </div>
    </>
  );
}
export default Search;

