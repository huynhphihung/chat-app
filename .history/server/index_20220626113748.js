const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(cors);

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("join_room", () => {
        socket.join()
    })

    socket.on("disconnect", () => {
        console.log("User is disconnected", socket.id);
    })
})

server.listen(3001, () => {
    console.log("SERVER IS RUNNING");
})