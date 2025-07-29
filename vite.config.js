import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    content: ["./src/**/*.{js,jsx}"],
    plugins: [react(), tailwindcss()],
    darkMode: "class",
    theme: {
        extend: {},
    },
});
