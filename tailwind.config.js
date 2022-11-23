const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    darkMode: "media",
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite-react/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: ["flowbite/plugin", "@tailwindcss/forms"],
};
