import Icon from "./Icon";

const TEAM = [
    {
        id: 1,
        name: "Adaeze Okonkwo",
        role: "Chief Executive Officer & Founder",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
        bio: "Adaeze founded Stephen's Gate in 2011 after a decade managing high-value property portfolios across Lagos and Abuja. Her vision was simple: to build Nigeria's most trusted premium real estate firm — one that combined the rigour of global best practice with a deep understanding of the local market. Today she leads a team of over 40 specialists and has personally overseen transactions exceeding ₦200 billion. A fellow of the Nigerian Institution of Estate Surveyors and Valuers (NIESV), Adaeze is a respected voice on housing policy and urban development.",
    },
    {
        id: 2,
        name: "Emeka Eze",
        role: "Head of Acquisitions",
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&q=80",
        bio: "Emeka oversees all property acquisitions and developer partnerships for Stephen's Gate. With a background in civil engineering and an MBA from Lagos Business School, he brings both technical precision and commercial acumen to every deal. He has cultivated relationships with Nigeria's leading developers — from Eko Atlantic and Mixta Africa to emerging players in the Port Harcourt and Enugu corridors — ensuring the portfolio consistently reflects where the market is heading, not just where it has been.",
    },
    {
        id: 3,
        name: "Ngozi Adeleke",
        role: "Director of Client Experience",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&q=80",
        bio: "Ngozi built Stephen's Gate's client experience model from the ground up. Drawing on years in luxury hospitality at Eko Hotels and Four Points by Sheraton, she introduced a concierge-led approach to real estate that the industry had not seen before in Nigeria. Every client receives a dedicated relationship manager, private viewings, and post-purchase support covering interior fit-out and facilities management. Her team has maintained a 97% client retention rate over four consecutive years.",
    },
    {
        id: 4,
        name: "Tunde Balogun",
        role: "Senior Market Analyst",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
        bio: "Tunde is the analytical engine behind Stephen's Gate's market intelligence. He produces the bi-annual Stephen's Gate Property Index — the most cited independent residential market report in Nigeria — drawing on transaction data, macroeconomic indicators, and on-the-ground intelligence across six states. His research has been referenced by the CBN, Stanbic IBTC, and the Federal Ministry of Housing. Clients rely on Tunde's forecasts to time acquisitions and disposals for maximum return.",
    },
];

function AboutPage() {
    return (
        <main className="text-on-surface">
            {/* Hero banner */}
            <section className="max-w-container-max mx-auto px-gutter pt-section-padding-mobile md:pt-section-padding-desktop pb-16 text-center">
                <span className="inline-block font-label-caps text-xs text-primary uppercase tracking-widest mb-4">
                    Who We Are
                </span>
                <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.15] tracking-tight text-on-surface max-w-3xl mx-auto mb-6">
                    Nigeria's home for premium real estate
                </h1>
                <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
                    Stephen's Gate was founded on one belief: that every Nigerian deserves to find a home that reflects their ambition. From Lekki to Maitama, from GRA Port Harcourt to Bodija, we bring world-class expertise to Africa's most dynamic property market.
                </p>
            </section>

            {/* Stats row */}
            <section className="border-y border-outline-variant">
                <div className="max-w-container-max mx-auto px-gutter py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "₦200B+", label: "Transactions closed" },
                        { value: "14 yrs", label: "In the market" },
                        { value: "3,500+", label: "Homes placed" },
                        { value: "97%", label: "Client retention" },
                    ].map(({ value, label }) => (
                        <div key={label}>
                            <p className="text-4xl font-bold text-primary mb-2">{value}</p>
                            <p className="text-sm text-secondary uppercase tracking-widest">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission blurb */}
            <section className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-section-padding-desktop">
                <div className="max-w-2xl mx-auto text-center">
                    <Icon name="diamond" size={40} className="text-primary mb-6 block mx-auto" />
                    <h2 className="text-[32px] font-semibold text-on-surface mb-4 leading-snug">
                        Our mission
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed">
                        To make premium property accessible, transparent, and rewarding for every Nigerian. We handle the complexity — the due diligence, the negotiation, the documentation — so you can focus entirely on the life you are building.
                    </p>
                </div>
            </section>

            {/* Team section */}
            <section className="border-t border-outline-variant py-section-padding-mobile md:py-section-padding-desktop">
                <div className="max-w-container-max mx-auto px-gutter">
                    <div className="text-center mb-16">
                        <span className="inline-block font-label-caps text-xs text-primary uppercase tracking-widest mb-4">
                            The Team
                        </span>
                        <h2 className="text-[40px] font-semibold text-on-surface leading-[1.3]">
                            The people behind Stephen's Gate
                        </h2>
                    </div>

                    {/* Alternating cards */}
                    <div className="flex flex-col gap-24">
                        {TEAM.map((member, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={member.id}
                                    className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-16 items-center`}
                                >
                                    {/* Image */}
                                    <div className="w-full md:w-1/2 flex-shrink-0">
                                        <div className="aspect-[4/3] rounded-xl overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={`Portrait of ${member.name}, ${member.role} at Stephen's Gate`}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="w-full md:w-1/2">
                                        <span className="inline-block font-label-caps text-xs text-primary uppercase tracking-widest mb-3">
                                            {member.role}
                                        </span>
                                        <h3 className="text-[32px] font-semibold text-on-surface mb-5 leading-snug">
                                            {member.name}
                                        </h3>
                                        <p className="text-base text-secondary leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;
