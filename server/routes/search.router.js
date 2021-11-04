const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/:tag', (req, res) => {
    const {tag} = req.params;
    console.log(tag);
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&tag=${tag}`)
        .then((response) => {
            console.log('response is', response);
            res.send(response.data);
        }).catch(err => {
            console.log('error getting on server', err);
        })
})

module.exports = router