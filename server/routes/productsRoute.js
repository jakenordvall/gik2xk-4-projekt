const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
  title: {
    length: {
      minimum: 2,
      maximum: 100,
      tooShort: "^The title has to bee atleast %{count} characters in length. ",
      tooLong:
        "^The title can not be longer then %{count} characters in length. ",
    },
  },
};

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
  const product = req.body;
  const invalidData = validate(product, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.product
      .create(product)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
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
