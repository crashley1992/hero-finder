const express = require('express');
const cors = require('cors')
const path = require('path');
const proxy = require('http-proxy-middleware')
const fs = require('fs')



const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./routes');

//middleware setup
app.use(cors())
app.use(proxy(['http://localhost:3001' ], { target: '/api/comic-json' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
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

app.listen(PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});

module.exports = app;