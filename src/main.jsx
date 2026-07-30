import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Fonts — bundled locally via Fontsource (no Google Fonts request at runtime)
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
