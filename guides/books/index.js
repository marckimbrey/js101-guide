var Url = require('../../lib/url');

const url = new Url()

const bookUrls = [
    'http://eloquentjavascript.net',
    'https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition',
    'http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf',
    'https://github.com/getify/You-Dont-Know-JS'
]

bookUrls.forEach((bookUrl) => url.open(bookUrl))
