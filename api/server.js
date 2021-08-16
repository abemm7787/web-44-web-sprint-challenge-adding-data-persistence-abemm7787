// build your server here and require it from index.js
const express = require("express")
const server = express()

server.use(express.json())
// const cors = require(cors())
// const helmet = require(helmet())

//  server.use(cors())
// server.use(helmet())


const taskRouter = require("./task/router")
const projectRouter = require("./project/router")
const resourceRouter = require("./resource/router")


server.use("/api/", taskRouter)
server.use("/api/", projectRouter)
server.use("/api/", resourceRouter)

server.use((err, req, res, next /*eslint-disable-line*/) => {
    res.status(res.status || 500).json({
      message: err.message,
      stack: err.stack,
      note:"FALSE ALARM! "
    });
  });
  


module.exports = server