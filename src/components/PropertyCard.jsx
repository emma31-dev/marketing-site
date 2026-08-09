import Icon from "./Icon";

/**
 * PropertyCard — reusable card for property listings.
 *
 * Props:
 *   image         {string}
 *   imageAlt      {string}
 *   badge         {string}   optional
 *   name          {string}   used in "featured" variant
 *   price         {string}   formatted, e.g. "₦850,000,000"
 *   location      {object|string}
 *                   object: { street, city, state }  — listing variant
 *                   string: plain text               — featured variant fallback
 *   propertyClass {string}   e.g. "Land", "Luxury", "Penthouse" …
 *   beds          {number}   undefined for Land
 *   baths         {number}   undefined for Land
 *   sqft          {string}
 *   variant       {"featured"|"listing"}
 *   onFavorite    {Function} optional
 */
function PropertyCard({
    image,
    imageAlt,
    badge,
    name,
    price,
    location,
    propertyClass,
    beds,
    baths,
    sqft,
    variant = "featured",
    onFavorite,
}) {
    const isLand = propertyClass === "Land";

    // Normalise location to display strings
    const locationLine =
        typeof location === "object"
            ? `${location.city}, ${location.state}`
            : location;
    const streetLine =
        typeof location === "object" ? location.street : null;

    if (variant === "listing") {
        return (
            <article className="bg-white border border-surface-container-high rounded-lg overflow-hidden transition-shadow duration-300 hover:[box-shadow:0_10px_30px_rgba(15,23,42,0.05)] flex flex-col cursor-pointer group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                    {badge && (
                        <div className="absolute top-4 left-4">
                            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-xs px-2 py-1 rounded uppercase tracking-widest">
                                {badge}
                            </span>
                        </div>
                    )}
                    {propertyClass && (
                        <div className="absolute top-4 right-4">
                            <span className="bg-primary/90 text-on-primary font-label-caps text-xs px-2 py-1 rounded uppercase tracking-widest">
                                {propertyClass}
                            </span>
                        </div>
                    )}
                </div>

                {/* Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="text-lg font-bold text-on-surface">{price}</h3>
                            {onFavorite && (
                                <button
                                    onClick={onFavorite}
                                    className="text-secondary hover:text-primary transition-colors"
                                    aria-label="Save to favourites"
                                >
                                    <Icon name="favorite_border" size={24} />
                                </button>
                            )}
                        </div>
                        {/* Street */}
                        {streetLine && (
                            <p className="text-xs text-secondary mb-0.5">{streetLine}</p>
                        )}
                        {/* City, State */}
                        <p className="text-sm text-secondary mb-4 flex items-center">
                            <Icon name="location_on" size={18} className="mr-1 shrink-0" />
                            {locationLine}
                        </p>
                    </div>

                    {/* Stats — land shows only plot size */}
                    <div className="flex space-x-4 border-t border-surface-container-high pt-4">
                        {isLand ? (
                            <div className="flex items-center text-on-surface-variant text-sm">
                                <Icon name="landscape" size={18} className="mr-1" />
                                {sqft}
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center text-on-surface-variant text-sm">
                                    <Icon name="bed" size={18} className="mr-1" /> {beds}
                                </div>
                                <div className="flex items-center text-on-surface-variant text-sm">
                                    <Icon name="bathtub" size={18} className="mr-1" /> {baths}
                                </div>
                                <div className="flex items-center text-on-surface-variant text-sm">
                                    <Icon name="square_foot" size={18} className="mr-1" /> {sqft}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </article>
        );
    }

    // ── featured variant ──────────────────────────────────────────────────────
    return (
        <article className="bg-surface-container-lowest border border-outline-variant rounded group hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-300">
            <div className="aspect-[4/3] relative overflow-hidden rounded-t">
                <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                {badge && (
                    <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded font-label-caps text-xs text-on-surface uppercase tracking-wider">
                        {badge}
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-xl font-semibold text-on-surface">{name}</h3>
                    <span className="text-sm text-secondary font-semibold">{price}</span>
                </div>
                <p className="text-sm text-secondary mb-4">{locationLine}</p>

                <div className="flex items-center space-x-4 mb-6 text-sm text-secondary">
                    {isLand ? (
                        <span className="flex items-center">
                            <Icon name="landscape" size={18} className="mr-1" /> {sqft}
                        </span>
                    ) : (
                        <>
                            <span className="flex items-center">
                                <Icon name="bed" size={18} className="mr-1" /> {beds} Bed
                            </span>
                            <span className="flex items-center">
                                <Icon name="shower" size={18} className="mr-1" /> {baths} Bath
                            </span>
                            <span className="flex items-center">
                                <Icon name="square_foot" size={18} className="mr-1" /> {sqft}
                            </span>
                        </>
                    )}
                </div>

                <a
                    href="#"
                    className="inline-flex items-center text-primary font-label-caps text-xs hover:text-on-primary-fixed-variant transition-colors uppercase tracking-widest"
                >
                    View Details <Icon name="arrow_right_alt" size={18} className="ml-1" />
                </a>
            </div>
        </article>
    );
}

export default PropertyCard;
