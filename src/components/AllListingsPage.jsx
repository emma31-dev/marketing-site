import { useState, useMemo } from "react";
import { LISTINGS, PRICE_RANGES, FILTER_TABS } from "../data/listings";
import ListingsSearchBar from "./ListingsSearchBar";
import FilterTabs from "./FilterTabs";
import PropertyCard from "./PropertyCard";
import Pagination from "./Pagination";
import Icon from "./Icon";

const PAGE_SIZE = 6;

const DEFAULT_FILTERS = {
    locationQuery: "",
    priceRange: "Any Price",
    propertyClass: "Any Class",
};

/** Returns true if the listing matches the current filter state */
function matchesFilters(listing, filters, activeTab) {
    // ── Tab filter ──
    if (activeTab !== "All" && !listing.filterTags.includes(activeTab)) return false;

    // ── Location: match against city or state (case-insensitive) ──
    if (filters.locationQuery.trim()) {
        const q = filters.locationQuery.toLowerCase();
        const { city, state, street } = listing.location;
        const haystack = `${street} ${city} ${state}`.toLowerCase();
        if (!haystack.includes(q)) return false;
    }

    // ── Property class ──
    if (filters.propertyClass !== "Any Class" && listing.propertyClass !== filters.propertyClass) {
        return false;
    }

    // ── Price range ──
    if (filters.priceRange !== "Any Price") {
        const range = PRICE_RANGES.find((r) => r.label === filters.priceRange);
        if (range && (listing.priceValue < range.min || listing.priceValue >= range.max)) {
            return false;
        }
    }

    return true;
}

function AllListingsPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [filters, setFilters] = useState(DEFAULT_FILTERS);
    const [currentPage, setCurrentPage] = useState(1);

    const handleFilterChange = (patch) => {
        setFilters((prev) => ({ ...prev, ...patch }));
        setCurrentPage(1); // reset to page 1 on any filter change
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    // Filtered results
    const filtered = useMemo(
        () => LISTINGS.filter((l) => matchesFilters(l, filters, activeTab)),
        [filters, activeTab]
    );

    // Per-tab counts (always based on search/class/price filters, not the tab itself)
    const tabCounts = useMemo(() => {
        const counts = {};
        for (const tab of FILTER_TABS) {
            counts[tab] = LISTINGS.filter((l) => matchesFilters(l, filters, tab)).length;
        }
        return counts;
    }, [filters]);

    // Pagination
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    return (
        <main className="flex-grow pt-[104px] pb-section-padding-mobile md:pb-section-padding-desktop">
            {/* Header & search */}
            <section className="max-w-container-max mx-auto px-gutter mb-stack-lg">
                <h1 className="text-[40px] font-semibold leading-[1.3] text-on-surface mb-stack-md">
                    All Listings
                </h1>
                <ListingsSearchBar filters={filters} onFilterChange={handleFilterChange} />
            </section>

            {/* Filter tabs */}
            <FilterTabs activeTab={activeTab} onTabChange={handleTabChange} counts={tabCounts} />

            {/* Results count */}
            <section className="max-w-container-max mx-auto px-gutter mb-stack-md">
                <p className="text-sm text-secondary">
                    {filtered.length === 0
                        ? "No properties match your search"
                        : `Showing ${paginated.length} of ${filtered.length} propert${filtered.length === 1 ? "y" : "ies"}`}
                </p>
            </section>

            {/* Property grid */}
            <section className="max-w-container-max mx-auto px-gutter mb-section-padding-mobile md:mb-section-padding-desktop">
                {paginated.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
                        {paginated.map((listing) => (
                            <PropertyCard
                                key={listing.id}
                                variant="listing"
                                {...listing}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
                        <Icon name="search_off" size={48} className="text-secondary" />
                        <p className="text-lg font-semibold text-on-surface">No results found</p>
                        <p className="text-secondary text-base max-w-sm">
                            Try adjusting your location, price range, or property class.
                        </p>
                        <button
                            onClick={() => { setFilters(DEFAULT_FILTERS); setActiveTab("All"); }}
                            className="mt-2 text-primary font-label-caps text-xs uppercase tracking-widest hover:text-on-primary-fixed-variant transition-colors"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </section>

            {/* Pagination — only show when there are results */}
            {filtered.length > PAGE_SIZE && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </main>
    );
}

export default AllListingsPage;
