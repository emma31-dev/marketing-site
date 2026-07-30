function Footer() {
    return (
        <footer className="bg-surface-container-low text-primary font-body-md w-full py-stack-lg border-t border-outline-variant transition-opacity duration-150">
            <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md">
                {/* Brand & copyright */}
                <div className="flex flex-col items-center md:items-start">
                    <span className="font-headline-md font-bold text-on-surface text-2xl">PADESTATE</span>
                    <p className="mt-2 text-secondary text-sm">© 2026 PadEstate Nigeria Limited. All rights reserved.</p>
                </div>

                {/* Links */}
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Privacy Policy</a>
                    <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Terms of Service</a>
                    <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Cookie Policy</a>
                    <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">Sitemap</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
