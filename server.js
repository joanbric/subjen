require("dotenv").config();

const app = require("express")();

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

app.use(cors());

// )) CORS

// Routing ((

// app.get("/", (req, res) => {
//     console.log(__dirname);
//     res.sendFile(__dirname + "/index.html");
// });
app.use(require('express').static(__dirname + "/source/public/"))
app.use(require("./source/router"));
// )) Routing

//Initialization server
server.listen(app.get("port"), () => {
    console.log("App listening on port " + app.get("port"));
});
