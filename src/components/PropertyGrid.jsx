import PropertyCard from "./PropertyCard";

const ALL_LISTINGS = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        imageAlt: "Modern luxury villa with large windows and tropical garden in Lekki Phase 1, Lagos",
        badge: "NEW",
        price: "₦850,000,000",
        location: "5 Admiralty Way, Lekki Phase 1, Lagos",
        beds: 5,
        baths: 4,
        sqft: "6,200 sqft",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        imageAlt: "Contemporary white duplex with large windows and well-kept garden in Maitama, Abuja",
        price: "₦620,000,000",
        location: "12 Udi Hills Close, Maitama, Abuja",
        beds: 4,
        baths: 3,
        sqft: "4,800 sqft",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        imageAlt: "Luxury penthouse interior with marble floors and panoramic city views over Victoria Island",
        price: "₦1,200,000,000",
        location: "23 Eko Atlantic Boulevard, Victoria Island, Lagos",
        beds: 3,
        baths: 3,
        sqft: "3,900 sqft",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        imageAlt: "Elegant four-bedroom detached home with pool and mature trees in a quiet GRA estate in Port Harcourt",
        price: "₦320,000,000",
        location: "7 Peter Odili Road, GRA Phase 2, Port Harcourt",
        beds: 4,
        baths: 3,
        sqft: "3,400 sqft",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
        imageAlt: "Smart modern terrace house with open courtyard and contemporary finishes in Jabi, Abuja",
        price: "₦185,000,000",
        location: "Plot 44, Jabi District, Abuja",
        beds: 3,
        baths: 2,
        sqft: "2,600 sqft",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
        imageAlt: "Luxury waterfront apartment with Lagos lagoon views and private balcony in Ikoyi",
        badge: "PRICE DROP",
        price: "₦490,000,000",
        location: "Bourdillon Road, Ikoyi, Lagos",
        beds: 3,
        baths: "2",
        sqft: "2,950 sqft",
    },
];

function PropertyGrid() {
    return (
        <section className="max-w-container-max mx-auto px-gutter mb-section-padding-mobile md:mb-section-padding-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
                {ALL_LISTINGS.map((listing) => (
                    <PropertyCard
                        key={listing.id}
                        variant="listing"
                        {...listing}
                    />
                ))}
            </div>
        </section>
    );
}

export default PropertyGrid;
