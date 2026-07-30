import { useState } from "react";
import { LISTINGS } from "../../data/listings";
import AdminLogin from "./AdminLogin";
import AdminListingsTable from "./AdminListingsTable";
import ListingFormModal from "./ListingFormModal";

function AdminPage({ onNavigate }) {
    const [authed, setAuthed]       = useState(false);
    const [listings, setListings]   = useState(LISTINGS);
    const [modal, setModal]         = useState(null); // null | "add" | listing object (edit)

    // ── CRUD handlers ─────────────────────────────────────────────────────────

    const handleSave = (saved) => {
        setListings((prev) => {
            const exists = prev.find((l) => l.id === saved.id);
            return exists
                ? prev.map((l) => (l.id === saved.id ? saved : l))
                : [...prev, saved];
        });
        setModal(null);
    };

    const handleDelete = (id) => {
        setListings((prev) => prev.filter((l) => l.id !== id));
    };

    // ── Auth gate ─────────────────────────────────────────────────────────────

    if (!authed) {
        return <AdminLogin onLogin={() => setAuthed(true)} />;
    }

    // ── Admin dashboard ───────────────────────────────────────────────────────

    return (
        <div className="min-h-screen bg-surface-container-low">
            {/* Top bar */}
            <header className="bg-surface border-b border-outline-variant h-16 flex items-center justify-between px-6 sticky top-0 z-40">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => onNavigate("landing")}
                        className="text-secondary hover:text-on-surface transition-colors"
                        aria-label="Back to site"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <span className="font-bold text-on-surface text-lg">PADESTATE</span>
                    <span className="text-secondary text-sm hidden sm:inline">/ Admin</span>
                </div>
                <button
                    onClick={() => setAuthed(false)}
                    className="flex items-center gap-1.5 text-sm text-secondary hover:text-error transition-colors"
                >
                    <span className="material-symbols-outlined text-base">logout</span>
                    Sign out
                </button>
            </header>

            {/* Page body */}
            <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
                {/* Page header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-on-surface">Listings</h1>
                        <p className="text-secondary text-sm mt-1">{listings.length} propert{listings.length === 1 ? "y" : "ies"} total</p>
                    </div>
                    <button
                        onClick={() => setModal("add")}
                        className="inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-on-primary-fixed-variant transition-colors"
                    >
                        <span className="material-symbols-outlined text-base">add</span>
                        Add Listing
                    </button>
                </div>

                {/* Stats strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: "Total Listings", value: listings.length, icon: "home" },
                        { label: "Lagos",   value: listings.filter((l) => l.location.state === "Lagos").length,   icon: "location_city" },
                        { label: "Abuja",   value: listings.filter((l) => l.location.state === "Abuja").length,   icon: "location_city" },
                        { label: "Land Plots", value: listings.filter((l) => l.propertyClass === "Land").length, icon: "landscape" },
                    ].map(({ label, value, icon }) => (
                        <div key={label} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
                            <div>
                                <p className="text-2xl font-bold text-on-surface">{value}</p>
                                <p className="text-xs text-secondary uppercase tracking-widest">{label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Table */}
                <AdminListingsTable
                    listings={listings}
                    onEdit={(listing) => setModal(listing)}
                    onDelete={handleDelete}
                />
            </main>

            {/* Add / Edit modal */}
            {modal !== null && (
                <ListingFormModal
                    listing={modal === "add" ? null : modal}
                    onSave={handleSave}
                    onClose={() => setModal(null)}
                />
            )}
        </div>
    );
}

export default AdminPage;
