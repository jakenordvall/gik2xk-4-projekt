const router = require("express").Router();
const db = require("../models");
const validate = require("validate.js");
const userService = require("../services/userService");

const constraints = {
  firstName: {
    length: {
      minimum: 3,
      maximum: 100,
      tooShort: "^Name has to bee atleast %{count} characters in length. ",
      tooLong: "^Name can not be longer then %{count} characters in length. ",
    },
  },
  lastName: {
    length: {
      minimum: 3,
      maximum: 100,
      tooShort: "^Lastname has to bee atleast %{count} characters in length. ",
      tooLong:
        "^Lastname can not be longer then %{count} characters in length. ",
    },
  },
  password: {
    length: {
      minimum: 3,
      maximum: 100,
      tooShort: "^Password has to bee atleast %{count} characters in length. ",
      tooLong:
        "^Password can not be longer then %{count} characters in length. ",
    },
  },
  email: {
    email: true,
  },
};

// "/" är rooten till products
router.get("/", (req, res) => {
  //här måste tabellerna skrivas i singular form.
  userService
    .getAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.user
      .create(user)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

router.put("/", (req, res) => {
  const user = req.body;
  const id = user.id;

  if (!id) {
    res.status(400).json("ID is mandatory");
  } else {
    db.user
      .update(req.body, {
        where: { id: req.body.id },
      })
      .then((result) => {
        if (result == 0) {
          res.send(`Provided ID: "${id}" do not match any User ID`);
        } else {
          res.send(`User with ID: ${id} has been updated`);
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
    db.user
      .destroy({
        where: { id: req.body.id },
      })
      .then((result) => {
        if (result == 0) {
          res.send(`Provided ID: "${id}" do not match any User ID`);
        } else {
          res.send(`User with ID: ${id} has been deleted`);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  userService
    .getByUser(userId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//detta exporteras till app.js
module.exports = router;
