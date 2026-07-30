import Hero from "./Hero";
import SearchBar from "./SearchBar";
import FeaturedProperties from "./FeaturedProperties";
import TrustSection from "./TrustSection";

function LandingPage({ onNavigate }) {
    return (
        <main>
            <Hero onNavigate={onNavigate} />

            <section className="max-w-container-max mx-auto px-gutter pb-section-padding-mobile md:pb-section-padding-desktop">
                <SearchBar variant="landing" />
            </section>

            <FeaturedProperties onNavigate={onNavigate} />

            <TrustSection />
        </main>
    );
}

export default LandingPage;
