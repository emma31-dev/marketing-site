import { useState, useRef, useEffect } from "react";
import { ALL_CITIES, ALL_STATES, PRICE_RANGES, PROPERTY_CLASSES } from "../data/listings";
import Icon from "./Icon";

// Build suggestion pool: individual cities + states
const LOCATION_SUGGESTIONS = [
    ...ALL_CITIES.map((c) => ({ label: c, type: "city" })),
    ...ALL_STATES.map((s) => ({ label: s, type: "state" })),
];

/**
 * ListingsSearchBar
 *
 * Props:
 *   filters       { locationQuery, priceRange, propertyClass }
 *   onFilterChange(patch)  — merges patch into parent filter state
 */
function ListingsSearchBar({ filters, onFilterChange }) {
    const [inputValue, setInputValue] = useState(filters.locationQuery ?? "");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLocationInput = (value) => {
        setInputValue(value);
        onFilterChange({ locationQuery: value });

        if (value.trim().length < 1) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }

        const q = value.toLowerCase();
        const matched = LOCATION_SUGGESTIONS.filter((s) =>
            s.label.toLowerCase().includes(q)
        ).slice(0, 6);

        setSuggestions(matched);
        setShowSuggestions(matched.length > 0);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion.label);
        onFilterChange({ locationQuery: suggestion.label });
        setSuggestions([]);
        setShowSuggestions(false);
    };

    const handleClearLocation = () => {
        setInputValue("");
        onFilterChange({ locationQuery: "" });
        setSuggestions([]);
        setShowSuggestions(false);
    };

    return (
        <div className="bg-white border border-surface-container-high rounded-lg p-2 flex flex-col md:flex-row items-stretch gap-3 shadow-sm">

            {/* ── Location input with autocomplete ── */}
            <div className="flex-grow relative" ref={wrapperRef}>
                <div className="flex items-center border-b-2 border-transparent focus-within:border-primary transition-colors p-2 gap-2">
                    <Icon name="location_on" size={24} className="text-secondary shrink-0" />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => handleLocationInput(e.target.value)}
                        onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                        placeholder="Search by city or state..."
                        className="w-full bg-transparent border-none focus:ring-0 text-base text-on-surface placeholder-secondary focus:outline-none"
                        aria-label="Filter by location"
                        aria-autocomplete="list"
                        aria-expanded={showSuggestions}
                    />
                    {inputValue && (
                        <button
                            onClick={handleClearLocation}
                            className="text-secondary hover:text-on-surface transition-colors shrink-0"
                            aria-label="Clear location"
                        >
                            <Icon name="close" size={18} />
                        </button>
                    )}
                </div>

                {/* Suggestions dropdown */}
                {showSuggestions && (
                    <ul
                        role="listbox"
                        className="absolute top-full left-0 right-0 z-50 bg-white border border-surface-container-high rounded-lg shadow-lg mt-1 overflow-hidden"
                    >
                        {suggestions.map((s) => (
                            <li key={`${s.type}-${s.label}`} role="option">
                                <button
                                    onMouseDown={(e) => e.preventDefault()} // prevent blur before click
                                    onClick={() => handleSuggestionClick(s)}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-surface-container-low transition-colors"
                                >
                                    <Icon name={s.type === "state" ? "map" : "location_city"} size={18} className="text-secondary shrink-0" />
                                    <span className="text-base text-on-surface">{s.label}</span>
                                    <span className="ml-auto text-xs text-secondary uppercase tracking-widest">
                                        {s.type}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="h-px md:h-auto md:w-px bg-surface-container-high" />

            {/* ── Property class ── */}
            <div className="flex items-center gap-2 border-b-2 border-transparent focus-within:border-primary transition-colors p-2 md:min-w-[180px] relative">
                <Icon name="home_work" size={24} className="text-secondary shrink-0" />
                <select
                    value={filters.propertyClass}
                    onChange={(e) => onFilterChange({ propertyClass: e.target.value })}
                    className="w-full bg-transparent border-none focus:ring-0 text-base text-on-surface cursor-pointer focus:outline-none appearance-none"
                    aria-label="Filter by property class"
                >
                    {PROPERTY_CLASSES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
                <Icon name="arrow_drop_down" size={24} className="text-secondary pointer-events-none shrink-0" />
            </div>

            <div className="h-px md:h-auto md:w-px bg-surface-container-high" />

            {/* ── Price range ── */}
            <div className="flex items-center gap-2 border-b-2 border-transparent focus-within:border-primary transition-colors p-2 md:min-w-[180px] relative">
                <Icon name="payments" size={24} className="text-secondary shrink-0" />
                <select
                    value={filters.priceRange}
                    onChange={(e) => onFilterChange({ priceRange: e.target.value })}
                    className="w-full bg-transparent border-none focus:ring-0 text-base text-on-surface cursor-pointer focus:outline-none appearance-none"
                    aria-label="Filter by price range"
                >
                    {PRICE_RANGES.map((r) => (
                        <option key={r.label} value={r.label}>{r.label}</option>
                    ))}
                </select>
                <Icon name="arrow_drop_down" size={24} className="text-secondary pointer-events-none shrink-0" />
            </div>
        </div>
    );
}

export default ListingsSearchBar;
