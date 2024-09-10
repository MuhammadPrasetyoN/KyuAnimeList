const Pagination = ({ page, lastPage, setPage }) => {
    
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    
    const handleNextPage = () => {
        if (page < lastPage){
        setPage((prevState) => prevState + 1)
        scrollTop()
        }
    }

    const handlePrevPage = () => {
        if (page > 1){
        setPage((prevState) => prevState - 1)
        scrollTop()
        }
    }
    
    const handlePageClick = (pageNumber) => {
        setPage(pageNumber)
        scrollTop()
    }

    // Logic to show pagination numbers
    const renderPageNumbers = () => {
        const pageNumbers = []

        //always show the first page
        pageNumbers.push(
            <button key={1} onClick={() => handlePageClick(1)} className={`transition-all hover:text-color-link ${page === 1 ? 'font-bold text-2xl text-color-accent' : ''}`}>
                1
            </button>
        )

        if (page >= 4) {
            pageNumbers.push(<span key="start-dots">...</span>);
        } 
        // Show 4 pages around the current page
        const startPage = Math.max(2, page);
        const endPage = Math.min(page + 3, lastPage - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => handlePageClick(i)} 
                className={`transition-all hover:text-color-link ${page === i ? 'font-bold text-2xl text-color-accent' : ''}`}>
                    {i}
                </button>
            );
        }

        if (endPage < lastPage - 1) {
            pageNumbers.push(<span key="end-dots">...</span>);
        }

        // Always show the last page
        pageNumbers.push(
            <button key={lastPage} onClick={() => handlePageClick(lastPage)} 
            className={`transition-all hover:text-color-link ${page === lastPage ? 'font-bold text-color-accent' : ''}`}>
                {lastPage}
            </button>
        );

        return pageNumbers;
    }
    
    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-dark font-semibold text-xl">
            <button 
                onClick={handlePrevPage} 
                className={`transition-all hover:text-color-link ${page === 1 && 'opacity-50 cursor-not-allowed'}`}
                disabled={page === 1}
            >
                Previous
            </button>

            {renderPageNumbers()}

            <button 
                onClick={handleNextPage} 
                className={`transition-all hover:text-color-link ${page === lastPage && 'opacity-50 cursor-not-allowed'}`}
                disabled={page === lastPage}
            >
                Next
            </button>

            
        </div>
    )
}

export default Pagination