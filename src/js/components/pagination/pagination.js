import React from "react";

const Pagination = ({ totalItems, itemsPerPage, handlePageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(pageNumber => (
                    <li
                        key={pageNumber}
                        className="pagination__number"
                        onClick={() => {
                            handlePageChange(pageNumber);
                        }}
                    >
                        {pageNumber}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
