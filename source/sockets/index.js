function socketManager(io) {
    this.io = io;

    this.io.on("connection", (socket) => {
        console.log("A user connected.", socket.id);

        socket.send("Hello my client!");
        socket.on("message", (data) => {
            console.log(data);
            socket.send("FUCK YOU!");
        });
        socket.on("chat1", (data) => {
            console.group("Chat 1");
            console.log(data);
            console.groupEnd("Chat 1");

            setTimeout(() => {
                socket.emit("chat1", "I recive your message in Chat 1");
                this.io.emit("chat1", socket.id + ' text me.')
            }, 2000);
        });

    });

}

module.exports = socketManager;
