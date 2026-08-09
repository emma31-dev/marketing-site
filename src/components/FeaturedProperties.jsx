import PropertyCard from "./PropertyCard";
import Icon from "./Icon";

const FEATURED_PROPERTIES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        imageAlt: "Modern luxury villa exterior with clean lines, large windows and lush tropical landscaping in Lekki Lagos",
        badge: "New",
        name: "Lekki Pearl Villa",
        price: "₦850,000,000",
        location: "Lekki Phase 1, Lagos",
        beds: 5,
        baths: 4,
        sqft: "6,200 sqft",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        imageAlt: "Contemporary detached duplex with white facade, double garage and manicured garden in Maitama Abuja",
        name: "Maitama Court",
        price: "₦620,000,000",
        location: "Maitama, Abuja",
        beds: 4,
        baths: "3",
        sqft: "4,800 sqft",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        imageAlt: "Elegant penthouse with open-plan living area, marble floors and panoramic views over Victoria Island Lagos",
        name: "VI Skyline Penthouse",
        price: "₦1,200,000,000",
        location: "Victoria Island, Lagos",
        beds: 3,
        baths: "3",
        sqft: "3,900 sqft",
    },
];

function FeaturedProperties({ onNavigate }) {
    return (
        <section className="bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop" id="properties">
            <div className="max-w-container-max mx-auto px-gutter">
                {/* Header */}
                <div className="flex justify-between items-end mb-stack-lg">
                    <h2 className="text-[40px] font-semibold leading-[1.3] text-on-surface">Featured Listings</h2>
                    <button
                        onClick={() => onNavigate("listings")}
                        className="hidden sm:inline-flex items-center text-primary font-label-caps text-xs hover:text-on-primary-fixed-variant transition-colors uppercase tracking-widest"
                    >
                        View All <Icon name="arrow_forward" size={16} className="ml-2" />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
                    {FEATURED_PROPERTIES.map((property) => (
                        <PropertyCard key={property.id} variant="featured" {...property} />
                    ))}
                </div>

                {/* Mobile "View All" CTA */}
                <div className="mt-stack-lg text-center sm:hidden">
                    <button
                        onClick={() => onNavigate("listings")}
                        className="inline-flex items-center justify-center px-6 py-3 border border-outline-variant rounded font-label-caps text-xs text-on-surface hover:bg-surface-container-high transition-colors w-full uppercase tracking-widest"
                    >
                        View All Listings
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProperties;
