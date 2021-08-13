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


server.use("./api/tasks", taskRouter)
server.use("./api/project/", projectRouter)
server.use("./api/resource/", resourceRouter)

server.get("*")
