const express = require('express');
const helmet = require('helmet');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const config = require('./app/src/config/config');
const Cocktail = require('./app/src/models/Cocktail');

mongoose.connect(config.db);
mongoose.Promise = global.Promise;

app.use(helmet());

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

//api start
app.get('/api/cocktails', (req, res, next) => {
    Cocktail.find()
      .exec()
      .then((cocktails) => res.json(cocktails))
      .catch((err) => next(err));
  });

//   app.post('/api/cocktails', function (req, res, next) {
//       const Cocktail = new Cocktail();
  
//       cocktails.save()
//         .then(() => res.json(cocktails))
//         .catch((err) => next(err));
//     });
  
//     app.delete('/api/cocktails/:id', function (req, res, next) {
//       Cocktail.findOneAndRemove({ _id: req.params.id })
//         .exec()
//         .then((counter) => res.json())
//         .catch((err) => next(err));
//     });
  
//     app.put('/api/cocktails/:id/increment', (req, res, next) => {
//       Cocktail.findById(req.params.id)
//         .exec()
//         .then((cocktails) => {
//           cocktails.count++;
  
//           cocktails.save()
//             .then(() => res.json(cocktails))
//             .catch((err) => next(err));
//         })
//         .catch((err) => next(err));
//     });
  
//     app.put('/api/cocktails/:id/decrement', (req, res, next) => {
//       Cocktail.findById(req.params.id)
//         .exec()
//         .then((cocktails) => {
//           cocktails.count--;
  
//           cocktails.save()
//             .then(() => res.json(cocktails))
//             .catch((err) => next(err));
//         })
//         .catch((err) => next(err));
//     });

//api end



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