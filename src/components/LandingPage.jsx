import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import TrustSection from "./TrustSection";

function LandingPage({ onNavigate }) {
    return (
        <main>
            <Hero onNavigate={onNavigate} />
            <FeaturedProperties onNavigate={onNavigate} />
            <TrustSection />
        </main>
    );
}

export default LandingPage;
