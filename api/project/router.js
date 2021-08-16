
const router = require("express").Router();

const Projects = require("./model");

router.get("/projects", (req, res, next) => {
  Projects.get()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(next);
});

router.post("/projects",  (req, res, next) => {
  Projects.create(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch(next);
});
module.exports = router;







module.exports = router