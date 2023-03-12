module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
    ],
    theme: {
        theme: {
            extend: {},
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
}
