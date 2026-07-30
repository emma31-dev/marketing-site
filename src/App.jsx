import { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// Lazy-loaded pages — each splits into its own JS chunk
const LandingPage     = lazy(() => import("./components/LandingPage"));
const AllListingsPage = lazy(() => import("./components/AllListingsPage"));
const AboutPage       = lazy(() => import("./components/AboutPage"));
const ContactPage     = lazy(() => import("./components/ContactPage"));
const AdminPage       = lazy(() => import("./components/admin/AdminPage"));

function ListingsSkeleton() {
    return (
        <div className="flex-grow flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4 text-secondary">
                <span className="material-symbols-outlined text-4xl animate-spin" style={{ animationDuration: "1s" }}>
                    progress_activity
                </span>
                <p className="text-sm uppercase tracking-widest font-label-caps">Loading listings</p>
            </div>
        </div>
    );
}

function App() {
    const [page, setPage] = useState("landing");

    const navigate = (destination) => {
        setPage(destination);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Admin page gets its own full-screen layout — no public Navbar/Footer
    if (page === "admin") {
        return (
            <Suspense fallback={null}>
                <AdminPage onNavigate={navigate} />
            </Suspense>
        );
    }

    return (
        <div className="bg-surface text-on-surface font-body-md antialiased overflow-x-hidden pt-20 min-h-screen flex flex-col">
            <Navbar activePage={page} onNavigate={navigate} />

            <div key={page} className="page-enter flex-grow flex flex-col">
                {page === "listings" && (
                    <Suspense fallback={<ListingsSkeleton />}>
                        <AllListingsPage />
                    </Suspense>
                )}

                {page !== "listings" && (
                    <Suspense fallback={null}>
                        {page === "landing" && <LandingPage onNavigate={navigate} />}
                        {page === "about"   && <AboutPage />}
                        {page === "contact" && <ContactPage />}
                    </Suspense>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default App;
