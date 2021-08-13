// build your `/api/tasks` router here
const router = require("express").Router();


router.get( "/",  (req,res,next) =>{
console.log("We are now live")
})



router.post("/", (req,res,next) =>{
    console.log("We are now live")
})





module.exports = router