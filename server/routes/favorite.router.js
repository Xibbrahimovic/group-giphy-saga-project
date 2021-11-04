const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM favorites JOIN category ON category.id = favorites.category_id;';
  pool.query(queryText)
  .then(result => {res.send(result.rows)})
  .catch(err => {
    console.log('Error in favorite GET', err);
    res.sendStatus(500);
  });
});
//isiah

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
