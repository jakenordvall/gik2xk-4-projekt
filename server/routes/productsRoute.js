const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
  title: {
    length: {
      minimum: 3,
      maximum: 100,
      tooShort: "^The title has to bee atleast %{count} characters in length. ",
      tooLong:
        "^The title can not be longer then %{count} characters in length. ",
    },
  },
  imageUrl: {
    url: {
      message: "^URL is wrongly formatted",
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
  const product = req.body;
  const id = product.id;

  if (!id) {
    res.status(400).json("ID is mandatory");
  } else {
    db.product
      .update(req.body, {
        where: { id: req.body.id },
      })
      .then((result) => {
        if (result == 0) {
          res.send(`Provided ID: "${id}" do not match any product ID`);
        } else {
          res.send(`Product with ID: ${id} has been updated`);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

router.delete("/", (req, res) => {
  const id = req.body.id;
  if (!id) {
    res.status(400).json("ID is mandatory");
  } else {
    db.product
      .destroy({
        where: { id: req.body.id },
      })
      .then((result) => {
        if (result == 0) {
          res.send(`Provided ID: "${id}" do not match any Product ID`);
        } else {
          res.send(`Product with ID: ${id} has been deleted`);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

//detta exporteras till app.js
module.exports = router;
