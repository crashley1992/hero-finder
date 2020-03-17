const express = require('express');
const cors = require('cors')
const path = require('path');
const proxy = require('http-proxy-middleware')
const fs = require('fs')
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./routes');
const savedHeroRoute = require('./routes/savedHeroRoute');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//middleware setup
app.use(cors())
app.use(proxy(['http://localhost:3001' ], { target: '/api/comic-json' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use(savedHeroRoute);
app.use(routes);

// Static assets
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === 'staging') {
  app.use(express.static(__dirname + '/client/build'));
  // If Express doesn't recognize route serve index.html
  app.get('*', (req, res) => {
      res.sendFile(
          path.resolve(__dirname, 'client', 'build', 'index.html')
      );
  });
}

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/SavedHeroes";
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});

module.exports = app;