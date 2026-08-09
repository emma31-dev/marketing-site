import { useState } from "react";
import Icon from "./Icon";

const NAV_LINKS = [
    { label: "Home", page: "landing" },
    { label: "Properties", page: "listings" },
    { label: "About", page: "about" },
    { label: "Contact", page: "contact" },
];

function Navbar({ activePage, onNavigate }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = (page) => {
        onNavigate(page);
        setMenuOpen(false);
    };

    return (
        <header className="bg-surface text-primary font-body-md fixed top-0 w-full border-b border-outline-variant transition-all duration-200 ease-in-out z-50">
            <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
                {/* Brand */}
                <button
                    onClick={() => handleNav("landing")}
                    className="font-headline-md font-bold text-on-surface text-2xl"
                >
                    STEPHEN'S GATE
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-stack-lg">
                    {NAV_LINKS.map(({ label, page }) => (
                        <button
                            key={page}
                            onClick={() => handleNav(page)}
                            className={`transition-colors text-sm ${
                                activePage === page
                                    ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
                                    : "text-secondary hover:text-primary"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={() => handleNav("contact")}
                        className="inline-flex items-center justify-center bg-primary text-on-primary px-6 py-3 rounded hover:bg-on-primary-fixed-variant transition-colors font-label-caps uppercase tracking-widest text-xs"
                    >
                        Contact Us
                    </button>
                    {/* Hidden admin link — small and discreet */}
                    <button
                        onClick={() => handleNav("admin")}
                        className="text-outline hover:text-secondary transition-colors"
                        aria-label="Admin"
                        title="Admin portal"
                    >
                        <Icon name="admin_panel_settings" size={20} />
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-on-surface"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Icon name={menuOpen ? "close" : "menu"} size={24} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-surface border-t border-outline-variant px-gutter py-stack-md flex flex-col gap-stack-md">
                    {NAV_LINKS.map(({ label, page }) => (
                        <button
                            key={page}
                            onClick={() => handleNav(page)}
                            className={`text-left py-2 transition-colors ${
                                activePage === page
                                    ? "text-primary font-semibold"
                                    : "text-secondary hover:text-primary"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNav("contact")}
                        className="inline-flex items-center justify-center bg-primary text-on-primary px-6 py-3 rounded hover:bg-on-primary-fixed-variant transition-colors font-label-caps uppercase tracking-widest text-xs"
                    >
                        Get Started
                    </button>
                </div>
            )}
        </header>
    );
}

export default Navbar;
