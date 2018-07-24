const express = require('express');
const helmet = require('helmet');
const app = express();
const path = require('path');

app.use(helmet());
// app.use(helmet.contentSecurityPolicy({
//     directives: {
//         defaultSrc: ["'self'"],
//         styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
//     }
// }));
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

app.get('/about', (req, res) => {
    res.send('This app was created by Sean Barnard!')
});



app.get('/index.bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, "dist/app/src/", "index.bundle.js"))
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, "app/public/","favicon.ico"))
});
app.get('/images/Cocktail-Icon.png', (req, res) => {
    res.sendFile(path.join(__dirname, "app/public/images","Cocktail-Icon.png"))
});

app.get('*', (req, res) => {
    res.send('Page not found')
});

var port = process.env.port || 3000
app.listen(port, () => console.log(`App started. Listening on port ${port}.`))