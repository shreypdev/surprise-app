import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import axios from 'axios';

const searchApp = express();

searchApp.use(cors({origin: true}));

searchApp.get('/', async (req, res) => {
  console.log('hey');
  axios.request({
    method: 'GET',
    url: 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search',
    params: {keyword: req.query.keyword, country: 'CA', category: 'aps'},
    headers: {
      'x-rapidapi-key': '3ca40ab764msh1c69906fb95e667p1ad0fajsn7e0d7b3a7453',
      'x-rapidapi-host': 'amazon-product-reviews-keywords.p.rapidapi.com',
    },
  }).then(function(response) {
    res.status(200).send(response.data);
  }).catch(function(error) {
    res.status(500).send(error);
  });
});

export default functions.https.onRequest(searchApp);
