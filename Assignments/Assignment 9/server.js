const express = require('express');
const app = express();
const http = require('http');
const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public"));
const {MongoClient} = require("mongodb");
const uri ="mongodb+srv://u21649988:jlIC38ctO2U1zken@cluster0.c97pkq8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

let classes;

server.listen(3000, async () => {
    console.log("Listening on localhost:3000");
    classes = await runFindQuery("classes", {},  {"projection":{"_id": 0}});
    classes.forEach(async (c) => {
        console.log(c);
    });
});

async function runFindQuery(collection, query, options) {
    try {
        await client.connect();
        const database = client.db('DBExample');
        const col = database.collection(collection);
        const cursor = col.find(query, options);

        return await cursor.toArray();
    } 
    finally {
        await client.close();
    }
}

io.on("connection", (socket) => {
    socket.emit("classes", classes);
    socket.on("getUsers", async (code) => {
        const users = await runFindQuery("users", {"enrolled": code}, {});
        users.forEach((u) => {
            console.log(u);
        });
    });
});