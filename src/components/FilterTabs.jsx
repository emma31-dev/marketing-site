const FILTERS = ["Trending", "New Construction", "Price Drop", "Waterfront"];

function FilterTabs({ activeFilter, onFilterChange }) {
    return (
        <section className="max-w-container-max mx-auto px-gutter mb-stack-lg overflow-x-auto">
            <div className="flex space-x-2 border-b border-surface-container-high pb-px min-w-max">
                {FILTERS.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => onFilterChange(filter)}
                        className={`px-4 py-3 text-base font-medium whitespace-nowrap transition-colors ${
                            activeFilter === filter
                                ? "text-primary border-b-2 border-primary"
                                : "text-secondary hover:text-primary"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default FilterTabs;
