import { useState, useEffect } from "react";

const LEGAL_CONTENT = {
    "Privacy Policy": {
        lastUpdated: "1 July 2025",
        body: `
## 1. Introduction
PadEstate Nigeria Limited ("PadEstate", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.

## 2. Information We Collect
We may collect the following categories of personal information:
- **Contact data** — name, email address, phone number, and postal address provided when you submit an enquiry or register an account.
- **Usage data** — IP address, browser type, pages visited, and time spent on pages, collected automatically via cookies and analytics tools.
- **Transaction data** — records of properties you have enquired about, shortlisted, or purchased through us.

## 3. How We Use Your Information
We use your information to:
- Respond to your property enquiries and match you with suitable listings.
- Send you property alerts, market reports, and other communications you have opted into.
- Improve our website and services through analytics.
- Comply with our legal and regulatory obligations under Nigerian law.

## 4. Sharing Your Information
We do not sell your personal information. We may share it with:
- Verified property developers and vendors strictly as required to complete a transaction.
- Service providers who assist us in operating our platform (e.g. hosting, email delivery), bound by confidentiality agreements.
- Law enforcement or regulatory authorities when required by applicable law.

## 5. Data Retention
We retain your personal data for as long as necessary to fulfil the purposes described in this policy, or as required by law. You may request deletion of your data at any time by contacting us at privacy@padestate.ng.

## 6. Your Rights
Under the Nigeria Data Protection Act (NDPA) 2023, you have the right to access, correct, or delete your personal data, and to object to or restrict certain processing. To exercise any of these rights, contact us at privacy@padestate.ng.

## 7. Cookies
We use essential cookies to operate our website and optional analytics cookies to understand how visitors use our site. You may disable non-essential cookies through your browser settings at any time.

## 8. Security
We implement industry-standard technical and organisational measures to protect your data against unauthorised access, alteration, or destruction. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.

## 9. Changes to This Policy
We may update this policy periodically. We will notify you of material changes by posting a notice on our website or by email. Continued use of our services after changes constitutes acceptance of the updated policy.

## 10. Contact Us
If you have any questions about this policy, please contact our Data Protection Officer at:
**PadEstate Nigeria Limited**
14 Adeola Odeku Street, 5th Floor, Victoria Island, Lagos 101241
Email: privacy@padestate.ng | Phone: +234 (0) 812 345 6789
    `,
    },
    "Terms of Service": {
        lastUpdated: "1 July 2025",
        body: `
## 1. Acceptance of Terms
By accessing or using the PadEstate website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.

## 2. Services Provided
PadEstate provides an online platform for listing, searching, and enquiring about residential and commercial real estate in Nigeria. We act as an intermediary between buyers, sellers, and developers. We do not guarantee the availability, accuracy, or legal status of any listing.

## 3. User Responsibilities
You agree to:
- Provide accurate and truthful information in all enquiries and registrations.
- Use the platform only for lawful purposes in accordance with Nigerian law.
- Not scrape, copy, or reproduce our listings or content without written permission.
- Not submit fraudulent enquiries or impersonate any person or entity.

## 4. Listings and Accuracy
While we make every effort to verify listings and titles, PadEstate does not warrant that any listing is free from errors, encumbrances, or legal disputes. We strongly recommend that all buyers engage an independent legal practitioner and conduct due diligence before completing any transaction.

## 5. Intellectual Property
All content on this website, including text, images, graphics, and data, is the property of PadEstate Nigeria Limited or its licensors and is protected by applicable copyright laws. You may not use our content for commercial purposes without prior written consent.

## 6. Limitation of Liability
To the fullest extent permitted by law, PadEstate shall not be liable for any indirect, incidental, or consequential damages arising from your use of our platform or reliance on any listing information. Our total liability in respect of any claim shall not exceed the fees paid by you to PadEstate in the three months preceding the claim.

## 7. Governing Law
These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts of Lagos State.

## 8. Amendments
We reserve the right to amend these Terms at any time. Continued use of our services following notification of changes constitutes your acceptance of the revised Terms.

## 9. Contact
For questions regarding these Terms, contact us at legal@padestate.ng.
    `,
    },
    "Cookie Policy": {
        lastUpdated: "1 July 2025",
        body: `
## 1. What Are Cookies?
Cookies are small text files placed on your device when you visit a website. They allow the website to recognise your device, remember your preferences, and improve your browsing experience.

## 2. How We Use Cookies
PadEstate uses the following categories of cookies:

**Essential Cookies**
These are necessary for the website to function and cannot be disabled. They include cookies that manage your session, remember your search filters during a visit, and ensure security features work correctly.

**Analytics Cookies**
We use analytics tools (such as aggregated usage tracking) to understand how visitors interact with our site — which pages are most visited, how long people spend browsing listings, and where users drop off. This helps us improve the platform. These cookies do not identify you personally.

**Preference Cookies**
These cookies remember your settings and preferences (such as your last searched location) so you do not have to re-enter them on subsequent visits.

## 3. Managing Cookies
You can control and delete cookies through your browser settings. Please note that disabling essential cookies may affect the functionality of the site. Instructions for the most common browsers:
- **Chrome**: Settings → Privacy and security → Cookies and other site data
- **Firefox**: Settings → Privacy & Security → Cookies and Site Data
- **Safari**: Preferences → Privacy → Manage Website Data

## 4. Third-Party Cookies
We do not currently use third-party advertising cookies. If this changes, we will update this policy and seek your consent where required.

## 5. Updates to This Policy
We may update this Cookie Policy to reflect changes in technology or regulation. Please check this page periodically for updates.

## 6. Contact
If you have questions about our use of cookies, contact us at privacy@padestate.ng.
    `,
    },
    "Sitemap": {
        lastUpdated: "1 July 2025",
        body: `
## Site Pages

**Main Navigation**
- Home — Overview of PadEstate with featured listings and search
- Properties — Full listing catalogue with filtering by location, price, and property class
- About — Company story, mission, statistics, and team profiles
- Contact — Enquiry form and office contact details

**Listing Categories**
- Luxury properties
- Modern properties
- Classic properties
- Penthouse apartments
- Duplex homes
- Terrace houses
- Land for sale

**Locations Covered**
- Lagos — Lekki, Victoria Island, Ikoyi, Oniru, Epe
- Abuja — Maitama, Asokoro, Wuse 2, Jabi, Garki
- Rivers — GRA Phase 2, Port Harcourt
- Oyo — Bodija, Ibadan

**Legal**
- Privacy Policy
- Terms of Service
- Cookie Policy

**Contact**
- 14 Adeola Odeku Street, 5th Floor, Victoria Island, Lagos
- hello@padestate.ng
- +234 (0) 812 345 6789
    `,
    },
};

/** Renders markdown-ish content (## headings and **bold**) without a library */
function SimpleMarkdown({ content }) {
    const lines = content.trim().split("\n");
    return (
        <div className="space-y-3">
            {lines.map((line, i) => {
                if (line.startsWith("## ")) {
                    return (
                        <h3 key={i} className="text-lg font-semibold text-on-surface mt-6 mb-2 first:mt-0">
                            {line.replace("## ", "")}
                        </h3>
                    );
                }
                if (!line.trim()) return <div key={i} className="h-1" />;
                // Replace **bold** inline
                const parts = line.split(/(\*\*[^*]+\*\*)/g);
                return (
                    <p key={i} className="text-base text-secondary leading-relaxed">
                        {parts.map((part, j) =>
                            part.startsWith("**") && part.endsWith("**")
                                ? <strong key={j} className="text-on-surface font-semibold">{part.slice(2, -2)}</strong>
                                : part
                        )}
                    </p>
                );
            })}
        </div>
    );
}

function LegalModal({ title, onClose }) {
    const content = LEGAL_CONTENT[title];

    // Close on Escape key
    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handler);
        // Prevent body scroll while modal is open
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        /* Backdrop */
        <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            {/* Dim overlay */}
            <div
                className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Panel */}
            <div className="relative z-10 bg-surface w-full sm:max-w-2xl sm:rounded-xl rounded-t-xl shadow-2xl flex flex-col max-h-[90dvh]">
                {/* Header — sticky */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant shrink-0">
                    <div>
                        <h2 id="modal-title" className="text-xl font-semibold text-on-surface">{title}</h2>
                        <p className="text-xs text-secondary mt-0.5">Last updated: {content.lastUpdated}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-secondary hover:text-on-surface transition-colors p-1 rounded"
                        aria-label="Close"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Scrollable body */}
                <div className="overflow-y-auto px-6 py-6 overscroll-contain">
                    <SimpleMarkdown content={content.body} />
                </div>

                {/* Footer — sticky */}
                <div className="shrink-0 px-6 py-4 border-t border-outline-variant flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-on-primary-fixed-variant transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    const [openModal, setOpenModal] = useState(null);

    return (
        <>
            <footer className="bg-surface-container-low text-primary font-body-md w-full py-stack-lg border-t border-outline-variant transition-opacity duration-150">
                <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md">
                    {/* Brand & copyright */}
                    <div className="flex flex-col items-center md:items-start">
                        <span className="font-headline-md font-bold text-on-surface text-2xl">PADESTATE</span>
                        <p className="mt-2 text-secondary text-sm">© 2025 PadEstate Nigeria Limited. All rights reserved.</p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {Object.keys(LEGAL_CONTENT).map((label) => (
                            <button
                                key={label}
                                onClick={() => setOpenModal(label)}
                                className="text-secondary hover:text-primary transition-colors text-sm"
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                </div>
            </footer>

            {openModal && (
                <LegalModal title={openModal} onClose={() => setOpenModal(null)} />
            )}
        </>
    );
}

export default Footer;
