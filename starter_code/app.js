const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// add the routes here
app.get('/', (req, res) => res.render('index'));


// app.get('/beers', (req, res) => res.render('beers'));

app.get('/beers', (req, res) => {
        punkAPI
          .getBeers()
          .then(beers => {
                //if you wanna check
                console.log(beers.length)
                //here we're passing beers object to beers.hbs, we should be able to iterate in beers.hbs
                res.render('beers', { beers });
              })
              .catch(error => console.log(error));
          });
        
        // app.get('/random-beers', (req, res) => res.render('random-beers'))
        
        
        
        app.listen(3000, () => console.log('🏃‍ on port 3000'));
