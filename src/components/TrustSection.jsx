const TRUST_ITEMS = [
    {
        icon: "real_estate_agent",
        title: "Local Expertise",
        description:
            "Our team of licensed estate surveyors knows Lagos, Abuja, and Port Harcourt inside out — giving you an edge in every negotiation.",
        border: "",
    },
    {
        icon: "verified_user",
        title: "Verified Titles",
        description:
            "Every listing on PadEstate is title-verified and legally screened. We eliminate the risk of C-of-O disputes so your investment is protected.",
        border: "border-y md:border-y-0 md:border-x border-outline-variant/30",
    },
    {
        icon: "diamond",
        title: "Premium Portfolio",
        description:
            "From Eko Atlantic penthouses to quiet Maitama courts, our curated portfolio covers Nigeria's most sought-after addresses.",
        border: "",
    },
];

function TrustSection() {
    return (
        <section className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg text-center">
                {TRUST_ITEMS.map(({ icon, title, description, border }) => (
                    <div key={title} className={`p-6 ${border}`}>
                        <div className="w-16 h-16 mx-auto mb-6 bg-surface-container-low rounded-full flex items-center justify-center text-secondary">
                            <span className="material-symbols-outlined text-3xl">{icon}</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-on-surface mb-4">{title}</h3>
                        <p className="text-base text-secondary leading-relaxed">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrustSection;
