const router = require("express").Router();

const db = require("../models");

// "/" är rooten till products
router.get("/", (req, res) => {
  //här måste tabellerna skrivas i singular form.
  db.product
    .findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  db.product
    .create(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/", (req, res) => {
  db.product
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then((result) => {
      req.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/", (req, res) => {
  db.product
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json(`Produkten raderades ${result}`);
    })
    .catch((err) => {
      res.send(err);
    });
});

//detta exporteras till app.js
module.exports = router;
