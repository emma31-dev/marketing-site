import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import AllListingsPage from "./components/AllListingsPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import "./App.css";

function App() {
    const [page, setPage] = useState("landing");

    const navigate = (destination) => {
        setPage(destination);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="bg-surface text-on-surface font-body-md antialiased overflow-x-hidden pt-20 min-h-screen flex flex-col">
            <Navbar activePage={page} onNavigate={navigate} />

            {page === "landing"  && <LandingPage onNavigate={navigate} />}
            {page === "listings" && <AllListingsPage />}
            {page === "about"    && <AboutPage />}
            {page === "contact"  && <ContactPage />}

            <Footer />
        </div>
    );
}

export default App;
