import { useState } from "react";

function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production this would POST to an API endpoint
        setSubmitted(true);
    };

    return (
        <main className="bg-surface text-on-surface">
            {/* Header */}
            <section className="max-w-container-max mx-auto px-gutter pt-section-padding-mobile md:pt-section-padding-desktop pb-16 text-center">
                <span className="inline-block font-label-caps text-xs text-primary uppercase tracking-widest mb-4">
                    Get In Touch
                </span>
                <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.15] tracking-tight text-on-surface max-w-3xl mx-auto mb-6">
                    Let's find your next home in Nigeria
                </h1>
                <p className="text-lg text-secondary max-w-xl mx-auto leading-relaxed">
                    Whether you're buying, selling, or investing, our team across Lagos, Abuja, and Port Harcourt is ready to help. Fill in the form and we'll be in touch within one business day.
                </p>
            </section>

            {/* Content grid */}
            <section className="max-w-container-max mx-auto px-gutter pb-section-padding-mobile md:pb-section-padding-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

                    {/* Left — contact info */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-on-surface mb-6">Contact details</h2>
                            <ul className="flex flex-col gap-5">
                                {[
                                    { icon: "location_on", label: "Office", value: "14 Adeola Odeku Street, 5th Floor\nVictoria Island, Lagos 101241" },
                                    { icon: "phone", label: "Phone", value: "+234 (0) 812 345 6789" },
                                    { icon: "mail", label: "Email", value: "hello@padestate.ng" },
                                    { icon: "schedule", label: "Hours", value: "Mon – Fri, 8am – 5pm WAT" },
                                ].map(({ icon, label, value }) => (
                                    <li key={label} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
                                        </div>
                                        <div>
                                            <p className="font-label-caps text-xs text-secondary uppercase tracking-widest mb-1">{label}</p>
                                            <p className="text-base text-on-surface whitespace-pre-line">{value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-outline-variant" />

                        {/* Social */}
                        <div>
                            <p className="font-label-caps text-xs text-secondary uppercase tracking-widest mb-4">Follow Us</p>
                            <div className="flex gap-3">
                                {["Instagram", "LinkedIn", "X"].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="px-4 py-2 border border-outline-variant rounded text-sm text-secondary hover:text-primary hover:border-primary transition-colors"
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — form */}
                    <div className="lg:col-span-3">
                        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 md:p-10">
                            {submitted ? (
                                <div className="flex flex-col items-center text-center py-12 gap-4">
                                    <span className="material-symbols-outlined text-5xl text-primary">check_circle</span>
                                    <h3 className="text-2xl font-semibold text-on-surface">Message sent!</h3>
                                    <p className="text-secondary text-base max-w-sm">
                                        Thanks for reaching out. One of our advisors will contact you within one business day.
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", interest: "", message: "" }); }}
                                        className="mt-4 text-primary font-label-caps text-xs uppercase tracking-widest hover:text-on-primary-fixed-variant transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <h2 className="text-2xl font-semibold text-on-surface mb-8">Send us a message</h2>

                                    {/* Name row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label htmlFor="firstName" className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">
                                                First Name <span className="text-error">*</span>
                                            </label>
                                            <input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                required
                                                value={form.firstName}
                                                onChange={handleChange}
                                                placeholder="Jane"
                                                className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-3 text-base text-on-surface placeholder-secondary focus:outline-none focus:border-primary transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">
                                                Last Name <span className="text-error">*</span>
                                            </label>
                                            <input
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                required
                                                value={form.lastName}
                                                onChange={handleChange}
                                                placeholder="Smith"
                                                className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-3 text-base text-on-surface placeholder-secondary focus:outline-none focus:border-primary transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="mb-5">
                                        <label htmlFor="email" className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">
                                            Email Address <span className="text-error">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="jane@example.com"
                                            className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-3 text-base text-on-surface placeholder-secondary focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="mb-5">
                                        <label htmlFor="phone" className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+234 (0) 800 000 0000"
                                            className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-3 text-base text-on-surface placeholder-secondary focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>

                                    {/* Interest */}
                                    <div className="mb-5">
                                        <label htmlFor="interest" className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">
                                            I'm interested in
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="interest"
                                                name="interest"
                                                value={form.interest}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-3 text-base text-on-surface focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="buying">Buying a property</option>
                                                <option value="selling">Selling a property</option>
                                                <option value="renting">Renting</option>
                                                <option value="investment">Investment advice</option>
                                                <option value="other">Something else</option>
                                            </select>
                                            <span className="material-symbols-outlined text-secondary absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                arrow_drop_down
                                            </span>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="mb-8">
                                        <label htmlFor="message" className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">
                                            Message <span className="text-error">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell us what you're looking for..."
                                            className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-3 text-base text-on-surface placeholder-secondary focus:outline-none focus:border-primary transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-caps text-xs uppercase tracking-widest hover:bg-on-primary-fixed-variant transition-colors"
                                    >
                                        Send Message
                                    </button>

                                    <p className="text-xs text-secondary text-center mt-4">
                                        By submitting this form you agree to our{" "}
                                        <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ContactPage;
