const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images

router.get("/", (req, res) => {
  const queryText = "SELECT * FROM favorites;";
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error in favorite GET", err);
      res.sendStatus(500);
    });
});
//isiah

// add a new favorite
router.post("/", (req, res) => {
  const newFavorite = req.body;
  const queryText = `INSERT INTO favorites ("title", "url") VALUES ($1, $2);`;
  pool
    .query(queryText, [newFavorite.title, newFavorite.url])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error completing INSERT INTO favorites query", err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const categoryId = req.body.category_id;
  console.log(req.body);
  // grab the id of the favorite being updated
  const { favId } = req.params;
  const queryText = `UPDATE "favorites" SET "category_id" = $1 WHERE "id" = $2;`;
  pool
    .query(queryText, [categoryId, favId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error completing UPDATE favorites query", err);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete("/:favId", (req, res) => {
  // grab the id of the favorite being deleted
  const { favId } = req.params;
  const queryText = `DELETE FROM "favorites" WHERE "id" = $1;`;
  pool
    .query(queryText, [favId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error completing DELETE favorites query", err);
      res.sendStatus(500);
    });
});

module.exports = router;
