import { useState } from "react";
import Icon from "../Icon";

function AdminListingsTable({ listings, onEdit, onDelete }) {
    const [deleteConfirm, setDeleteConfirm] = useState(null); // id of listing pending delete

    const handleDeleteClick = (id) => setDeleteConfirm(id);
    const handleDeleteConfirm = () => {
        onDelete(deleteConfirm);
        setDeleteConfirm(null);
    };

    return (
        <>
            {/* Table — scrolls horizontally on small screens */}
            <div className="overflow-x-auto rounded-xl border border-outline-variant">
                <table className="w-full min-w-[800px] text-sm">
                    <thead className="bg-surface-container-low border-b border-outline-variant">
                        <tr>
                            {["Image", "Name", "Class", "Location", "Price", "Beds/Baths", "Tags", "Actions"].map((h) => (
                                <th key={h} className="text-left px-4 py-3 font-label-caps text-xs text-secondary uppercase tracking-widest whitespace-nowrap">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/50">
                        {listings.length === 0 && (
                            <tr>
                                <td colSpan={8} className="px-4 py-12 text-center text-secondary">
                                    No listings yet. Click <strong>Add Listing</strong> to get started.
                                </td>
                            </tr>
                        )}
                        {listings.map((l) => (
                            <tr key={l.id} className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                                {/* Thumbnail */}
                                <td className="px-4 py-3">
                                    <div className="w-16 h-12 rounded overflow-hidden bg-surface-container shrink-0">
                                        <img
                                            src={l.image}
                                            alt={l.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </td>

                                {/* Name + badge */}
                                <td className="px-4 py-3 max-w-[180px]">
                                    <p className="font-semibold text-on-surface truncate">{l.name}</p>
                                    {l.badge && (
                                        <span className="text-xs bg-surface-container text-secondary px-1.5 py-0.5 rounded uppercase tracking-wider">
                                            {l.badge}
                                        </span>
                                    )}
                                </td>

                                {/* Class */}
                                <td className="px-4 py-3 whitespace-nowrap">
                                    <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
                                        {l.propertyClass}
                                    </span>
                                </td>

                                {/* Location */}
                                <td className="px-4 py-3">
                                    <p className="text-on-surface">{l.location.city}</p>
                                    <p className="text-secondary text-xs">{l.location.state}</p>
                                </td>

                                {/* Price */}
                                <td className="px-4 py-3 font-semibold text-on-surface whitespace-nowrap">{l.price}</td>

                                {/* Beds / Baths */}
                                <td className="px-4 py-3 text-secondary whitespace-nowrap">
                                    {l.propertyClass === "Land"
                                        ? <span className="text-xs italic">Land</span>
                                        : `${l.beds ?? "—"} / ${l.baths ?? "—"}`}
                                </td>

                                {/* Filter tags */}
                                <td className="px-4 py-3">
                                    <div className="flex flex-wrap gap-1">
                                        {(l.filterTags ?? []).map((tag) => (
                                            <span key={tag} className="text-xs bg-surface-container text-secondary px-1.5 py-0.5 rounded whitespace-nowrap">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </td>

                                {/* Actions */}
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => onEdit(l)}
                                            className="flex items-center gap-1 text-primary hover:text-on-primary-fixed-variant text-xs font-semibold transition-colors px-2 py-1.5 rounded hover:bg-primary/10"
                                            aria-label={`Edit ${l.name}`}
                                        >
                                            <Icon name="edit" size={18} />
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteClick(l.id)}
                                            className="flex items-center gap-1 text-error hover:text-error/80 text-xs font-semibold transition-colors px-2 py-1.5 rounded hover:bg-error/10"
                                            aria-label={`Delete ${l.name}`}
                                        >
                                            <Icon name="delete" size={18} />
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Delete confirmation dialog */}
            {deleteConfirm !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm" onClick={() => setDeleteConfirm(null)} />
                    <div className="relative z-10 bg-surface border border-outline-variant rounded-xl p-6 w-full max-w-sm shadow-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Icon name="warning" size={32} className="text-error" />
                            <h3 className="text-lg font-semibold text-on-surface">Delete listing?</h3>
                        </div>
                        <p className="text-secondary text-sm mb-6">
                            This will permanently remove <strong className="text-on-surface">{listings.find((l) => l.id === deleteConfirm)?.name}</strong> from the listings. This action cannot be undone.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => setDeleteConfirm(null)}
                                className="px-4 py-2 text-sm border border-outline-variant rounded-lg text-secondary hover:text-on-surface transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteConfirm}
                                className="px-4 py-2 text-sm bg-error text-on-error rounded-lg hover:bg-error/90 transition-colors font-semibold"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AdminListingsTable;
