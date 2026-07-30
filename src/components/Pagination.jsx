function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <section className="max-w-container-max mx-auto px-gutter flex justify-center mb-section-padding-mobile md:mb-section-padding-desktop">
            <div className="flex items-center space-x-2">
                {/* Previous */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-surface-container-high rounded-lg text-secondary hover:text-on-surface hover:border-outline transition-colors text-base bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>

                {/* Page numbers */}
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium text-base transition-colors ${
                            page === currentPage
                                ? "bg-primary text-white"
                                : "border border-surface-container-high bg-white text-secondary hover:text-on-surface hover:border-outline"
                        }`}
                    >
                        {page}
                    </button>
                ))}

                {totalPages > 3 && (
                    <span className="text-secondary px-2">...</span>
                )}

                {/* Next */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-surface-container-high rounded-lg text-secondary hover:text-on-surface hover:border-outline transition-colors text-base bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </section>
    );
}

export default Pagination;
