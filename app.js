const express = require('express');
const helmet = require('helmet');
const app = express();
const path = require('path');

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
}));
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "app/src/", "index.html"))
});

app.get('/cocktails', (req, res) => {
    res.send('Search for a cocktail!')
});

app.get('/ingredients', (req, res) => {
    res.send('Search for an ingredient!')
});

app.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, "app/src/", "index.js"))
});

app.get('*', (req, res) => {
    res.send('Page not found')
});

var port = 3000;
app.listen(port, () => console.log(`App started. Listening on port ${port}.`))