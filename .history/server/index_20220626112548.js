const express = require("express")
const cors = require("cors")
const http = require("http")
const {Server} = require("socket.io")

const app = express()
app.use(cors)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: "POST"
    }
})