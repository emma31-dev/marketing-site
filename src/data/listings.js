/**
 * listings.js — single source of truth for all property data.
 *
 * Each listing has:
 *  - location.street, location.city, location.state  — for split filtering & display
 *  - priceValue   {number}  — raw number in Naira for range filtering
 *  - price        {string}  — formatted display string
 *  - propertyClass {string} — one of: "Luxury" | "Modern" | "Classic" | "Penthouse" | "Duplex" | "Terrace" | "Land"
 *  - filterTags   {string[]} — maps to FilterTab values: "Trending" | "New Construction" | "Price Drop" | "Waterfront"
 *  - beds / baths — undefined for land
 */
export const LISTINGS = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        imageAlt: "Modern luxury villa with large windows and tropical garden in Lekki Phase 1, Lagos",
        badge: "NEW",
        name: "Admiralty Pearl Villa",
        price: "₦850,000,000",
        priceValue: 850_000_000,
        location: { street: "5 Admiralty Way", city: "Lekki Phase 1", state: "Lagos" },
        propertyClass: "Luxury",
        beds: 5,
        baths: 4,
        sqft: "6,200 sqft",
        filterTags: ["Trending", "New Construction"],
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        imageAlt: "Contemporary white duplex with large windows and manicured garden in Maitama, Abuja",
        name: "Maitama Court Duplex",
        price: "₦620,000,000",
        priceValue: 620_000_000,
        location: { street: "12 Udi Hills Close", city: "Maitama", state: "Abuja" },
        propertyClass: "Duplex",
        beds: 4,
        baths: 3,
        sqft: "4,800 sqft",
        filterTags: ["Trending"],
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        imageAlt: "Luxury penthouse with marble floors and panoramic views over Victoria Island, Lagos",
        badge: "NEW",
        name: "Eko Atlantic Penthouse",
        price: "₦1,200,000,000",
        priceValue: 1_200_000_000,
        location: { street: "23 Eko Atlantic Boulevard", city: "Victoria Island", state: "Lagos" },
        propertyClass: "Penthouse",
        beds: 3,
        baths: 3,
        sqft: "3,900 sqft",
        filterTags: ["Trending", "Waterfront", "New Construction"],
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        imageAlt: "Elegant detached home with pool and mature trees in GRA Phase 2, Port Harcourt",
        name: "GRA Garden Estate",
        price: "₦320,000,000",
        priceValue: 320_000_000,
        location: { street: "7 Peter Odili Road", city: "GRA Phase 2", state: "Rivers" },
        propertyClass: "Classic",
        beds: 4,
        baths: 3,
        sqft: "3,400 sqft",
        filterTags: ["Trending"],
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
        imageAlt: "Modern terrace house with open courtyard and contemporary finishes in Jabi, Abuja",
        name: "Jabi Terrace",
        price: "₦185,000,000",
        priceValue: 185_000_000,
        location: { street: "Plot 44 Cadastral Zone", city: "Jabi", state: "Abuja" },
        propertyClass: "Terrace",
        beds: 3,
        baths: 2,
        sqft: "2,600 sqft",
        filterTags: ["New Construction"],
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
        imageAlt: "Waterfront apartment with Lagos lagoon views and private balcony in Ikoyi",
        badge: "PRICE DROP",
        name: "Ikoyi Lagoon Apartment",
        price: "₦490,000,000",
        priceValue: 490_000_000,
        location: { street: "15 Bourdillon Road", city: "Ikoyi", state: "Lagos" },
        propertyClass: "Modern",
        beds: 3,
        baths: 2,
        sqft: "2,950 sqft",
        filterTags: ["Price Drop", "Waterfront"],
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        imageAlt: "Prime land plot with clear title in a fast-developing area of Epe, Lagos",
        badge: "LAND",
        name: "Epe Scheme Land",
        price: "₦45,000,000",
        priceValue: 45_000_000,
        location: { street: "Km 12 Epe Expressway", city: "Epe", state: "Lagos" },
        propertyClass: "Land",
        sqft: "1,200 sqm",
        filterTags: ["New Construction"],
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        imageAlt: "Luxury detached villa with private pool and landscaped gardens in Asokoro, Abuja",
        name: "Asokoro Presidential Villa",
        price: "₦980,000,000",
        priceValue: 980_000_000,
        location: { street: "3 Cadastral Close", city: "Asokoro", state: "Abuja" },
        propertyClass: "Luxury",
        beds: 6,
        baths: 5,
        sqft: "8,100 sqft",
        filterTags: ["Trending"],
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&q=80",
        imageAlt: "Contemporary waterfront duplex on the shores of the Atlantic Ocean in Oniru, Lagos",
        badge: "NEW",
        name: "Oniru Waterfront Duplex",
        price: "₦750,000,000",
        priceValue: 750_000_000,
        location: { street: "Plot 7 Oniru Royal Estate", city: "Oniru", state: "Lagos" },
        propertyClass: "Duplex",
        beds: 4,
        baths: 4,
        sqft: "5,500 sqft",
        filterTags: ["New Construction", "Waterfront"],
    },
];

/** All unique states derived from data */
export const ALL_STATES = [...new Set(LISTINGS.map((l) => l.location.state))].sort();

/** All unique cities derived from data */
export const ALL_CITIES = [...new Set(LISTINGS.map((l) => l.location.city))].sort();

/** Price range buckets — value in Naira */
export const PRICE_RANGES = [
    { label: "Any Price",       min: 0,           max: Infinity },
    { label: "Under ₦200M",     min: 0,           max: 200_000_000 },
    { label: "₦200M – ₦500M",  min: 200_000_000, max: 500_000_000 },
    { label: "₦500M – ₦1B",    min: 500_000_000, max: 1_000_000_000 },
    { label: "₦1B+",           min: 1_000_000_000, max: Infinity },
];

/** Property class options */
export const PROPERTY_CLASSES = [
    "Any Class",
    "Luxury",
    "Modern",
    "Classic",
    "Penthouse",
    "Duplex",
    "Terrace",
    "Land",
];

/** Filter tab names */
export const FILTER_TABS = ["All", "Trending", "New Construction", "Price Drop", "Waterfront"];
