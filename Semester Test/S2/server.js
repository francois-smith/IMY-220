const fs = require('fs');
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static("public"));

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
    fs.readFile('questions.json', (err, data) => {
        if (err) throw err;
        let questions = JSON.parse(data);
        socket.emit("questions", questions);
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));