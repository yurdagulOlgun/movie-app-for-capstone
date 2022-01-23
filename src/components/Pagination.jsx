import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../index.css";

function Pagination(props) {
  const [pageCount, setPageCount] = useState(0);
  const { movieData, setMovieData, setOffset } = props;

  useEffect(() => {
    setMovieData(movieData);
    setPageCount(Math.ceil(movieData.length / 10));
  }, [movieData]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log(selectedPage * 10);
    setOffset(selectedPage * 10);
  };

  return (
    <>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        subContainerClassName={"pages pagination"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}

export default Pagination;
