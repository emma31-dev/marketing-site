import { useState, useEffect } from "react";
import { PROPERTY_CLASSES, FILTER_TABS } from "../../data/listings";
import Icon from "../Icon";

const CLASS_OPTIONS = PROPERTY_CLASSES.filter((c) => c !== "Any Class");
const TAG_OPTIONS   = FILTER_TABS.filter((t) => t !== "All");

const EMPTY_FORM = {
    name: "",
    image: "",
    imageAlt: "",
    badge: "",
    propertyClass: "Luxury",
    street: "",
    city: "",
    state: "",
    priceValue: "",
    beds: "",
    baths: "",
    sqft: "",
    filterTags: [],
};

function field(label, required = false) {
    return (
        <span>
            {label}
            {required && <span className="text-error ml-0.5">*</span>}
        </span>
    );
}

function ListingFormModal({ listing, onSave, onClose }) {
    const isEdit = !!listing;

    const [form, setForm] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});

    // Populate form when editing
    useEffect(() => {
        if (listing) {
            setForm({
                name:          listing.name ?? "",
                image:         listing.image ?? "",
                imageAlt:      listing.imageAlt ?? "",
                badge:         listing.badge ?? "",
                propertyClass: listing.propertyClass ?? "Luxury",
                street:        listing.location?.street ?? "",
                city:          listing.location?.city ?? "",
                state:         listing.location?.state ?? "",
                priceValue:    listing.priceValue ?? "",
                beds:          listing.beds ?? "",
                baths:         listing.baths ?? "",
                sqft:          listing.sqft ?? "",
                filterTags:    listing.filterTags ?? [],
            });
        }
    }, [listing]);

    // Close on Escape
    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    const set = (key, value) => {
        setForm((p) => ({ ...p, [key]: value }));
        setErrors((p) => ({ ...p, [key]: undefined }));
    };

    const toggleTag = (tag) => {
        setForm((p) => ({
            ...p,
            filterTags: p.filterTags.includes(tag)
                ? p.filterTags.filter((t) => t !== tag)
                : [...p.filterTags, tag],
        }));
    };

    const validate = () => {
        const e = {};
        if (!form.name.trim())       e.name       = "Name is required";
        if (!form.image.trim())      e.image      = "Image URL is required";
        if (!form.street.trim())     e.street     = "Street is required";
        if (!form.city.trim())       e.city       = "City is required";
        if (!form.state.trim())      e.state      = "State is required";
        if (!form.priceValue || isNaN(Number(form.priceValue))) e.priceValue = "Enter a valid price";
        if (!form.sqft.trim())       e.sqft       = "Size is required";
        if (form.propertyClass !== "Land") {
            if (!form.beds && form.beds !== 0) e.beds  = "Required";
            if (!form.baths && form.baths !== 0) e.baths = "Required";
        }
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }

        const priceNum = Number(form.priceValue);

        // Format price display e.g. ₦850,000,000
        const formatted = "₦" + priceNum.toLocaleString("en-NG");

        const saved = {
            ...(isEdit ? { id: listing.id } : { id: Date.now() }),
            name:          form.name.trim(),
            image:         form.image.trim(),
            imageAlt:      form.imageAlt.trim() || form.name.trim(),
            badge:         form.badge.trim() || undefined,
            propertyClass: form.propertyClass,
            location: {
                street: form.street.trim(),
                city:   form.city.trim(),
                state:  form.state.trim(),
            },
            price:      formatted,
            priceValue: priceNum,
            sqft:       form.sqft.trim(),
            filterTags: form.filterTags,
            ...(form.propertyClass !== "Land" && {
                beds:  Number(form.beds),
                baths: Number(form.baths),
            }),
        };

        onSave(saved);
    };

    const isLand = form.propertyClass === "Land";

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm" onClick={onClose} />

            {/* Panel */}
            <div className="relative z-10 bg-surface w-full sm:max-w-2xl sm:rounded-xl rounded-t-xl shadow-2xl flex flex-col max-h-[92dvh]">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant shrink-0">
                    <h2 className="text-xl font-semibold text-on-surface">
                        {isEdit ? "Edit Listing" : "Add New Listing"}
                    </h2>
                    <button onClick={onClose} className="text-secondary hover:text-on-surface transition-colors" aria-label="Close">
                        <Icon name="close" size={24} />
                    </button>
                </div>

                {/* Scrollable form body */}
                <form onSubmit={handleSubmit} noValidate className="overflow-y-auto px-6 py-6 flex flex-col gap-5">

                    {/* Name */}
                    <div>
                        <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("Property Name", true)}</label>
                        <input value={form.name} onChange={(e) => set("name", e.target.value)}
                            placeholder="e.g. Admiralty Pearl Villa"
                            className={`w-full border rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors ${errors.name ? "border-error" : "border-outline-variant"}`} />
                        {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Image URL + Alt */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("Image URL", true)}</label>
                            <input value={form.image} onChange={(e) => set("image", e.target.value)}
                                placeholder="https://images.unsplash.com/..."
                                className={`w-full border rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors ${errors.image ? "border-error" : "border-outline-variant"}`} />
                            {errors.image && <p className="text-error text-xs mt-1">{errors.image}</p>}
                        </div>
                        <div>
                            <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("Image Description")}</label>
                            <input value={form.imageAlt} onChange={(e) => set("imageAlt", e.target.value)}
                                placeholder="Brief description for accessibility"
                                className="w-full border border-outline-variant rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors" />
                        </div>
                    </div>

                    {/* Image preview */}
                    {form.image && (
                        <div className="h-36 rounded-lg overflow-hidden border border-outline-variant bg-surface-container">
                            <img src={form.image} alt={form.imageAlt} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
                        </div>
                    )}

                    {/* Property class + Badge */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("Property Class", true)}</label>
                            <div className="relative">
                                <select value={form.propertyClass} onChange={(e) => set("propertyClass", e.target.value)}
                                    className="w-full border border-outline-variant rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                                    {CLASS_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                                </select>
                                <Icon name="arrow_drop_down" size={24} className="text-secondary absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                        </div>
                        <div>
                            <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("Badge Label")}</label>
                            <input value={form.badge} onChange={(e) => set("badge", e.target.value)}
                                placeholder="e.g. NEW, PRICE DROP"
                                className="w-full border border-outline-variant rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors" />
                        </div>
                    </div>

                    {/* Location */}
                    <fieldset className="border border-outline-variant rounded-lg p-4">
                        <legend className="font-label-caps text-xs text-secondary uppercase tracking-widest px-1">Location</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                            <div className="sm:col-span-3">
                                <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("Street", true)}</label>
                                <input value={form.street} onChange={(e) => set("street", e.target.value)}
                                    placeholder="e.g. 5 Admiralty Way"
                                    className={`w-full border rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors ${errors.street ? "border-error" : "border-outline-variant"}`} />
                                {errors.street && <p className="text-error text-xs mt-1">{errors.street}</p>}
                            </div>
                            <div>
                                <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("City", true)}</label>
                                <input value={form.city} onChange={(e) => set("city", e.target.value)}
                                    placeholder="e.g. Lekki"
                                    className={`w-full border rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors ${errors.city ? "border-error" : "border-outline-variant"}`} />
                                {errors.city && <p className="text-error text-xs mt-1">{errors.city}</p>}
                            </div>
                            <div>
                                <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("State", true)}</label>
                                <input value={form.state} onChange={(e) => set("state", e.target.value)}
                                    placeholder="e.g. Lagos"
                                    className={`w-full border rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors ${errors.state ? "border-error" : "border-outline-variant"}`} />
                                {errors.state && <p className="text-error text-xs mt-1">{errors.state}</p>}
                            </div>
                        </div>
                    </fieldset>

                    {/* Price + Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("Price (₦)", true)}</label>
                            <input type="number" min="0" value={form.priceValue} onChange={(e) => set("priceValue", e.target.value)}
                                placeholder="e.g. 850000000"
                                className={`w-full border rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors ${errors.priceValue ? "border-error" : "border-outline-variant"}`} />
                            {errors.priceValue && <p className="text-error text-xs mt-1">{errors.priceValue}</p>}
                            {form.priceValue && !isNaN(Number(form.priceValue)) && (
                                <p className="text-xs text-secondary mt-1">= ₦{Number(form.priceValue).toLocaleString("en-NG")}</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("Size / sqft", true)}</label>
                            <input value={form.sqft} onChange={(e) => set("sqft", e.target.value)}
                                placeholder="e.g. 4,200 sqft or 1,200 sqm"
                                className={`w-full border rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors ${errors.sqft ? "border-error" : "border-outline-variant"}`} />
                            {errors.sqft && <p className="text-error text-xs mt-1">{errors.sqft}</p>}
                        </div>
                    </div>

                    {/* Beds + Baths — hidden for Land */}
                    {!isLand && (
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("Bedrooms", true)}</label>
                                <input type="number" min="0" value={form.beds} onChange={(e) => set("beds", e.target.value)}
                                    placeholder="e.g. 4"
                                    className={`w-full border rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors ${errors.beds ? "border-error" : "border-outline-variant"}`} />
                                {errors.beds && <p className="text-error text-xs mt-1">{errors.beds}</p>}
                            </div>
                            <div>
                                <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">{field("Bathrooms", true)}</label>
                                <input type="number" min="0" step="0.5" value={form.baths} onChange={(e) => set("baths", e.target.value)}
                                    placeholder="e.g. 3"
                                    className={`w-full border rounded-lg px-4 py-3 text-base bg-transparent text-on-surface focus:outline-none focus:border-primary transition-colors ${errors.baths ? "border-error" : "border-outline-variant"}`} />
                                {errors.baths && <p className="text-error text-xs mt-1">{errors.baths}</p>}
                            </div>
                        </div>
                    )}

                    {/* Filter tags */}
                    <div>
                        <label className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-3">Filter Tags</label>
                        <div className="flex flex-wrap gap-2">
                            {TAG_OPTIONS.map((tag) => {
                                const active = form.filterTags.includes(tag);
                                return (
                                    <button key={tag} type="button" onClick={() => toggleTag(tag)}
                                        className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                                            active
                                                ? "bg-primary text-on-primary border-primary"
                                                : "border-outline-variant text-secondary hover:border-primary hover:text-primary"
                                        }`}>
                                        {tag}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </form>

                {/* Sticky footer */}
                <div className="shrink-0 px-6 py-4 border-t border-outline-variant flex justify-end gap-3">
                    <button type="button" onClick={onClose}
                        className="px-5 py-2.5 text-sm border border-outline-variant rounded-lg text-secondary hover:text-on-surface transition-colors">
                        Cancel
                    </button>
                    <button onClick={handleSubmit}
                        className="px-5 py-2.5 text-sm bg-primary text-on-primary rounded-lg font-semibold hover:bg-on-primary-fixed-variant transition-colors">
                        {isEdit ? "Save Changes" : "Add Listing"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ListingFormModal;
