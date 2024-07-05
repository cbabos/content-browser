import ReactPaginate from 'react-paginate';
import { tPokeList } from "../typedefs/ItemDescriptor";
import { useState } from 'react';
import ListView from './ListView';

type tPageChangeParam = {
    selected: number
};

const PaginatedList = ({content}: tPokeList) => {
    const [offset, setPageOffset] = useState(0);
    const itemsPerPage: number = 10;

    // Since I haven't found any search possibilities we are paginating the whole preloaded set
    const calculatedPageCount = Math.ceil(content.length / itemsPerPage);
    const endOffset = offset + itemsPerPage;
    const itemsToRender = content.slice(offset, endOffset);

    const handlePagination = ({selected}: tPageChangeParam) => {
        setPageOffset(selected);
    }

    const pager = (
        <ReactPaginate
            containerClassName='pagination'
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePagination}
            marginPagesDisplayed={0}
            pageRangeDisplayed={5}
            pageCount={calculatedPageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
    )

    return (
        <>
            <ListView content={itemsToRender} />
            {pager}
        </>
    )
}

export default PaginatedList;