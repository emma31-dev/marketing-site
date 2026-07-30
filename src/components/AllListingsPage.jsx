import { useState } from "react";
import SearchBar from "./SearchBar";
import FilterTabs from "./FilterTabs";
import PropertyGrid from "./PropertyGrid";
import Pagination from "./Pagination";

function AllListingsPage() {
    const [activeFilter, setActiveFilter] = useState("Trending");
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    return (
        <main className="flex-grow pt-[104px] pb-section-padding-mobile md:pb-section-padding-desktop">
            {/* Header & search */}
            <section className="max-w-container-max mx-auto px-gutter mb-stack-lg">
                <h1 className="text-[40px] font-semibold leading-[1.3] text-on-surface mb-stack-md">All Listings</h1>
                <SearchBar variant="listings" />
            </section>

            {/* Filter tabs */}
            <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            {/* Property grid */}
            <PropertyGrid />

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </main>
    );
}

export default AllListingsPage;
