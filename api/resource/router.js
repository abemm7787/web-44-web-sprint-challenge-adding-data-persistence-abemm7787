const router = require("express").Router();
const equity = require("./model");

router.get("/resources", (req, res, next) => {
    equity.get()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/resources", (req, res, next) => {
    equity.create(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch(next);
});

module.exports = router;