
// build your `/api/resources` router here
const router = require("express").Router()


router.get("/", (req,res, next) => {
    console.log("We are now live")
})



router.post("/:id", (req,res, next) => {

    console.log("We are now live")
})





module.exports =  router