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
    
    return(
        <div className="flex justify-center 
        items-center py-4 px-2 gap-4 text-color-dark font-semibold text-xl">
            <button onClick={handlePrevPage} className={`transition-all hover:text-color-link ${page === 1 && 'opacity-50 cursor-not-allowed'}`}
            disabled={page === 1}
            >Previous</button>
            
            <p>{page} of {lastPage}</p>

            <button onClick={handleNextPage} className={`transition-all hover:text-color-link ${page === lastPage && 'opacity-50 cursor-not-allowed'}`}
            disabled={page === lastPage}
            >Next</button>
        </div>
    )
}

export default Pagination