import Icon from "./Icon";

/**
 * SearchBar — used on both LandingPage (3-field) and AllListingsPage (2-field).
 *
 * Props:
 *   variant  {"landing"|"listings"}  - Controls which fields are shown
 */
function SearchBar({ variant = "landing" }) {
    if (variant === "listings") {
        return (
            <div className="bg-white border border-surface-container-high rounded-lg p-2 flex flex-col md:flex-row items-center gap-4 shadow-sm">
                {/* Location */}
                <div className="flex-grow flex items-center border-b-2 border-transparent focus-within:border-primary transition-colors w-full md:w-auto p-2">
                    <Icon name="location_on" size={24} className="text-secondary mr-2 shrink-0" />
                    <input
                        type="text"
                        placeholder="Filter by city or area..."
                        className="w-full bg-transparent border-none focus:ring-0 text-base text-on-surface placeholder-secondary focus:outline-none"
                    />
                </div>

                <div className="h-8 w-px bg-surface-container-high hidden md:block" />

                {/* Class of house */}
                <div className="flex-grow flex items-center border-b-2 border-transparent focus-within:border-primary transition-colors w-full md:w-auto p-2 relative">
                    <Icon name="home_work" size={24} className="text-secondary mr-2 shrink-0" />
                    <select
                        className="w-full bg-transparent border-none focus:ring-0 text-base text-on-surface cursor-pointer focus:outline-none appearance-none"
                        defaultValue=""
                    >
                        <option value="" disabled>Class of house</option>
                        <option value="luxury">Luxury</option>
                        <option value="modern">Modern</option>
                        <option value="classic">Classic</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="duplex">Duplex</option>
                    </select>
                    <Icon name="arrow_drop_down" size={24} className="text-secondary absolute right-2 pointer-events-none" />
                </div>

                {/* Search button */}
                <button className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-on-primary-fixed-variant transition-colors duration-200 w-full md:w-auto flex items-center justify-center gap-2">
                    <Icon name="search" size={20} /> Search
                </button>
            </div>
        );
    }

    // variant === "landing"
    return (
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-md shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row gap-stack-md">
            {/* Location */}
            <div className="flex-1 border-b-2 border-outline-variant md:border-b-0 md:border-r-2 focus-within:border-primary transition-colors px-4 py-2">
                <label className="block font-label-caps text-xs text-secondary mb-1 uppercase tracking-widest">Location</label>
                <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface text-base appearance-none">
                    <option>Any Location</option>
                    <option>Lekki, Lagos</option>
                    <option>Victoria Island, Lagos</option>
                    <option>Ikoyi, Lagos</option>
                    <option>Maitama, Abuja</option>
                    <option>Asokoro, Abuja</option>
                    <option>Wuse 2, Abuja</option>
                    <option>GRA, Port Harcourt</option>
                    <option>Trans Amadi, Port Harcourt</option>
                    <option>Bodija, Ibadan</option>
                    <option>Jabi, Abuja</option>
                </select>
            </div>

            {/* Property type */}
            <div className="flex-1 border-b-2 border-outline-variant md:border-b-0 md:border-r-2 focus-within:border-primary transition-colors px-4 py-2">
                <label className="block font-label-caps text-xs text-secondary mb-1 uppercase tracking-widest">Property Type</label>
                <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface text-base appearance-none">
                    <option>Any Type</option>
                    <option>Duplex</option>
                    <option>Penthouse</option>
                    <option>Terrace</option>
                    <option>Detached Villa</option>
                    <option>Flat / Apartment</option>
                </select>
            </div>

            {/* Price range */}
            <div className="flex-1 border-b-2 border-outline-variant md:border-b-0 focus-within:border-primary transition-colors px-4 py-2">
                <label className="block font-label-caps text-xs text-secondary mb-1 uppercase tracking-widest">Price Range</label>
                <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-on-surface text-base appearance-none">
                    <option>Any Price</option>
                    <option>₦50M – ₦150M</option>
                    <option>₦150M – ₦500M</option>
                    <option>₦500M – ₦1B</option>
                    <option>₦1B+</option>
                </select>
            </div>

            {/* Search button */}
            <button className="bg-on-surface text-on-primary p-4 rounded hover:bg-secondary transition-colors flex items-center justify-center">
                <Icon name="search" size={24} />
            </button>
        </div>
    );
}

export default SearchBar;
