import * as React from "react";

function Pagination(
  setPage: React.Dispatch<React.SetStateAction<number>>,
  page: number
) {
  return (
    <div className="d-flex m-3 justify-content-center">
      <button
        className="btn btn-outline-secondary"
        onClick={() => setPage(page > 1 ? page - 1 : 1)}
      >
        Previous
      </button>
      <button
        className="btn btn-outline-secondary ml-3"
        onClick={() => setPage(1)}
      >
        1
      </button>
      <button
        className="btn btn-outline-secondary ml-3"
        onClick={() => setPage(2)}
      >
        2
      </button>
      <button
        className="btn btn-outline-secondary ml-3"
        onClick={() => setPage(page < 2 ? page + 1 : 2)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
