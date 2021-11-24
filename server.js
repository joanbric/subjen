require("dotenv").config();
const express = require('express');
const app = express();

const httpServer = require("http");
const server = httpServer.createServer(app);

app.set("port", process.env.PORT || 3000);

// MongoDB Connection
const mongoose = require("./source/db-connector");

// Socket.io ((
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
require("./source/sockets/index")(io);
// )) Socket.io

// CORS  ((
let cors = require("cors");

const corsOpts = {
    origin: "*",

    methods: ["GET", "POST", "HEAD"],

    allowedHeaders: ["Content-Type", "Access-Control-Allow-Origin"],
};

app.use(cors(corsOpts));

// )) CORS

// Routing ((

app.use(express.static(__dirname + "/source/public/"));
app.use(express.static(__dirname + "/source/public/js/"));
//app.use(require("./source/router"));
// )) Routing

//Initialization server
server.listen(app.get("port"), () => {
    console.log("App listening on http://localhost:" + app.get("port") + "/");
});
