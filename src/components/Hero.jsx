import ListingsSearchBar from "./ListingsSearchBar";
import { useState } from "react";

function Hero({ onNavigate }) {
    const [filters, setFilters] = useState({
        locationQuery: "",
        priceRange: "Any Price",
        propertyClass: "Any Class",
    });

    const handleSearch = () => {
        // Navigate to listings; AllListingsPage manages its own filter state,
        // so we just land there and the user can refine further.
        onNavigate("listings");
    };

    return (
        <section className="max-w-container-max mx-auto px-gutter pt-section-padding-mobile md:pt-section-padding-desktop pb-section-padding-mobile flex flex-col items-center text-center">
            <h1 className="font-display-hero-mobile text-[40px] md:text-[72px] md:leading-[1.1] md:tracking-[-0.02em] font-bold text-on-surface max-w-4xl mb-stack-lg leading-[1.2]">
                Find your perfect <span className="text-primary">HOME</span> in Nigeria
            </h1>
            <p className="text-lg text-secondary max-w-2xl mb-stack-lg leading-relaxed">
                Nigeria's most trusted luxury property platform. From the heart of Lagos Island to the serene courts of Abuja, we connect you with homes that match your ambition.
            </p>

            {/* Search bar */}
            <div className="w-full max-w-4xl">
                <div className="flex flex-col gap-3">
                    <ListingsSearchBar filters={filters} onFilterChange={(patch) => setFilters((p) => ({ ...p, ...patch }))} />
                    <button
                        onClick={handleSearch}
                        className="w-full bg-primary text-on-primary py-4 rounded-lg hover:bg-on-primary-fixed-variant transition-colors text-base font-semibold shadow-sm hover:shadow-lg hover:shadow-primary/20"
                    >
                        Search Properties
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
