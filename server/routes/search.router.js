const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:tag", (req, res) => {
  const { tag } = req.params;
  console.log(tag);
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${tag}`
    )
    .then((response) => {
      console.log("response url is ", response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log("Error getting on server", err);
    });
});

module.exports = router;
