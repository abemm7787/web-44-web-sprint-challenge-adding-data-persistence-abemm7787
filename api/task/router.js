
const router = require("express").Router();
const taskmaster = require("./model");

router.get("/tasks", (req, res, next) => {
    taskmaster.get()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.post("/tasks", (req, res, next) => {
    taskmaster.create(req.body)
    .then((brandnewTask) => {
      res.status(201).json(brandnewTask);
    })
    .catch(next);
});
module.exports = router;