module.exports = {
    purge: {
        content: [
            './layouts/**/*.html',
            './content/**/*.md'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
