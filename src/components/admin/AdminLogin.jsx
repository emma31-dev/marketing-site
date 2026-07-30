import { useState } from "react";

function AdminLogin({ onLogin }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPw, setShowPw] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "123456") {
            onLogin();
        } else {
            setError("Incorrect password. Please try again.");
            setPassword("");
        }
    };

    return (
        <div className="min-h-screen bg-surface flex items-center justify-center px-4">
            <div className="w-full max-w-sm">
                {/* Logo */}
                <div className="text-center mb-8">
                    <span className="text-3xl font-bold text-on-surface">PADESTATE</span>
                    <p className="text-secondary text-sm mt-2 uppercase tracking-widest font-label-caps">Admin Portal</p>
                </div>

                {/* Card */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
                    <h1 className="text-xl font-semibold text-on-surface mb-6">Sign in to continue</h1>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-5">
                            <label htmlFor="admin-pw" className="block font-label-caps text-xs text-secondary uppercase tracking-widest mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="admin-pw"
                                    type={showPw ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                                    placeholder="Enter admin password"
                                    autoComplete="current-password"
                                    className={`w-full border rounded-lg px-4 py-3 pr-12 text-base text-on-surface bg-transparent focus:outline-none focus:border-primary transition-colors ${
                                        error ? "border-error" : "border-outline-variant"
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPw((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-on-surface transition-colors"
                                    aria-label={showPw ? "Hide password" : "Show password"}
                                >
                                    <span className="material-symbols-outlined text-xl">
                                        {showPw ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                            {error && (
                                <p className="text-error text-sm mt-2 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base">error</span>
                                    {error}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-on-primary py-3 rounded-lg font-semibold text-base hover:bg-on-primary-fixed-variant transition-colors"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                <p className="text-center text-xs text-secondary mt-6">
                    Not an admin?{" "}
                    <a href="/" className="text-primary hover:underline">Back to site</a>
                </p>
            </div>
        </div>
    );
}

export default AdminLogin;
