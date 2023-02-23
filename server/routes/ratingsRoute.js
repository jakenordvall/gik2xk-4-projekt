const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
  rating: {
    numericality: {
      greaterThanOrEqualTo: 0.0,
      lessThanOrEqualTo: 5.0,
    },
    //ser till att rating.rating är includerad, ska eventuellt tas bort ifall rating får vara tom.
    presence: true,
  },
};

// "/" är rooten till ratings
router.get("/", (req, res) => {
  //här måste tabellerna skrivas i singular form.
  db.rating
    .findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  const rating = req.body;
  const invalidData = validate(rating, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.rating
      .create(rating)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

router.put("/", (req, res) => {
  const rating = req.body;
  const id = rating.id;
  const invalidData = validate(rating, constraints);

  if (!id) {
    res.status(400).json("ID is mandatory");
  } else if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.rating
      .update(req.body, {
        where: { id: req.body.id },
      })
      .then((result) => {
        if (result == 0) {
          res.send(`Provided ID: "${id}" do not match any rating ID`);
        } else {
          res.send(`rating with ID: ${id} has been updated`);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

router.delete("/", (req, res) => {
  db.rating
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json(`rating with ${req.body.id} has been deleted`);
    })
    .catch((err) => {
      res.send(err);
    });
});

//detta exporteras till app.js
module.exports = router;
