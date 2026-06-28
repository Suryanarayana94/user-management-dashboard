function Pagination({ totalUsers, usersPerPage, setCurrentPage, currentPage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      {pages.map((page, index) => (
        <button
          key={index}
          className={`btn mx-1 ${
            page === currentPage ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;