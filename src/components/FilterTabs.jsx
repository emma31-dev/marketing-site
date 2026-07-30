import { FILTER_TABS } from "../data/listings";

/**
 * FilterTabs
 *
 * Props:
 *   activeTab     {string}
 *   onTabChange   {Function}
 *   counts        {Object}  e.g. { All: 9, Trending: 4, ... }
 */
function FilterTabs({ activeTab, onTabChange, counts = {} }) {
    return (
        <section className="max-w-container-max mx-auto px-gutter mb-stack-lg overflow-x-auto">
            <div className="flex space-x-1 border-b border-surface-container-high pb-px min-w-max">
                {FILTER_TABS.map((tab) => {
                    const count = counts[tab] ?? 0;
                    const isActive = activeTab === tab;
                    return (
                        <button
                            key={tab}
                            onClick={() => onTabChange(tab)}
                            className={`px-4 py-3 text-base font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                                isActive
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-secondary hover:text-primary"
                            }`}
                        >
                            {tab}
                            <span
                                className={`text-xs px-1.5 py-0.5 rounded-full font-label-caps tabular-nums ${
                                    isActive
                                        ? "bg-primary text-on-primary"
                                        : "bg-surface-container text-secondary"
                                }`}
                            >
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

export default FilterTabs;
