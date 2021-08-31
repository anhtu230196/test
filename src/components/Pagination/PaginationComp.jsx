import React from 'react'
import { Pagination } from 'semantic-ui-react'

function PaginationComp({ posts, postsPerPage, handlePageChangeProps, currentPage }) {

    const handlePageChange = (e, curPage) => {
        handlePageChangeProps(curPage.activePage)
    }

    return (
        <Pagination
            onPageChange={handlePageChange}
            activePage={currentPage}
            lastItem={false}
            firstItem={false}
            pointing
            secondary
            totalPages={Math.ceil(posts?.length / postsPerPage)}
        />
    )
}

export default PaginationComp
