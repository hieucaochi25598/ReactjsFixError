import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// có thể đổi ten Pagination as PaginationRT
import styles from '../styles/pagination.module.scss'

const PaginationComponent = ({currentPage, pageSize, totalCount, onChangePage}) => {
    const totalPage = Math.ceil(totalCount/ pageSize);
    // ví dụ totalPage = 5 => [0, 1, 2, 3, 4]
    const pages = [...Array(totalPage).keys()];
    return (
        <Pagination>
            {pages.map(page => (
                <PaginationItem>
                    <PaginationLink className={styles.paginationLink} onClick={() => onChangePage(page + 1)} >
                    {page + 1}
                    </PaginationLink>
                </PaginationItem>
            ))}
        </Pagination>
    )
};

export default PaginationComponent;
