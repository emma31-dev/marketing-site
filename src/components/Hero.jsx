function Hero({ onNavigate }) {
    return (
        <section className="max-w-container-max mx-auto px-gutter pt-section-padding-mobile md:pt-section-padding-desktop pb-section-padding-mobile flex flex-col items-center text-center">
            <h1 className="font-display-hero-mobile text-[40px] md:text-[72px] md:leading-[1.1] md:tracking-[-0.02em] font-bold text-on-surface max-w-4xl mb-stack-lg leading-[1.2]">
                Find your perfect <span className="text-primary">HOME</span> in Nigeria
            </h1>
            <p className="text-lg text-secondary max-w-2xl mb-stack-lg leading-relaxed">
                Nigeria's most trusted luxury property platform. From the heart of Lagos Island to the serene courts of Abuja, we connect you with homes that match your ambition.
            </p>
            <div className="flex flex-col sm:flex-row gap-stack-md">
                <button
                    onClick={() => onNavigate("listings")}
                    className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-4 rounded hover:bg-on-primary-fixed-variant transition-colors text-lg shadow-sm hover:shadow-lg hover:shadow-primary/20"
                >
                    Explore Properties
                </button>
            </div>
        </section>
    );
}

export default Hero;
