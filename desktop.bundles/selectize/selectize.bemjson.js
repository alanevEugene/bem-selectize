module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'selectize.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'selectize.min.js' }],
    content: [
        {
            block: 'selectize',
            tags: [
                'awesome',
                'neat'
            ]
        }
    ]
}
