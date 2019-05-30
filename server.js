const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const publicDir = path.join(__dirname, './public');

app.use(express.static(publicDir));

app.get('/listing', (req, res) => {
  const { listingId } = req.query;
  const queryString = `/listing?listingId=${listingId}`;
  axios(`http://localhost:3002/${queryString}`);
})

app.listen(port, () => console.log('Listening on Port:', port));

