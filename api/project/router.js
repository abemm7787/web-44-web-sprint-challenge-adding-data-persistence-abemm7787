// build your `/api/projects` router her

const router =  require("express").Router()


// router.posts("/", (req,res,next) => {
//     console.log("We are now live")
// })


router.get("/", (req,res,next) =>{
    console.log("We are now live")
})









module.exports = router