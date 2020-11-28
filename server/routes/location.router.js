// ========== LOCATION ROUTER ========== //
// GETS SEARCH RESULTS FROM WEATHER API //

const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get('/', (req, res) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${req.query.tag}&days=3`)
      .then((response) => {
        console.log("location router", response.data);
        res.send(response.data);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
});  // End GET from Weather API

module.exports = router;