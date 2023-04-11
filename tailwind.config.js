module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",
        './_jekyll/_drafts/**/*.html',
        './_jekyll/_includes/**/*.html',
        './_jekyll/_layouts/**/*.html',
        './_jekyll/_posts/*.md',
        './*.md',
        './*.html',
    ],
    theme: {
        extend: {
            colors: {
                primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
}
