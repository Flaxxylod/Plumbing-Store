import { useState } from "react";

const usePagination = <T,>(array: T[], itemsPerPage: number,) => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    const offset: number = currentPage * itemsPerPage;
    const currentItems = array.slice(offset, offset + itemsPerPage);

    const pageCount = Math.ceil(array.length / itemsPerPage);

    const PageClick = ({ selected }): void => {
        setCurrentPage(selected);
    };
    return (
        { currentItems, pageCount, PageClick, currentPage }
    );
}

export default usePagination;