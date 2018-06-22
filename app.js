const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
}));
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/cocktails', (req, res) => {
    res.send('Search for a cocktail!')
});

app.get('/ingredients', (req, res) => {
    res.send('Search for an ingredient!')
});

app.get('*', (req, res) => {
    res.send('Page not found')
});

var port = 3000;
app.listen(port, () => console.log(`App started. Listening on port ${port}.`))