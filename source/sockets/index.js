function socketManager(io){
        this.io =  io;
        this.io.on('connection', (socket) => {
            console.log('A user connected.')
        
            socket.send('Hello my client!')
            socket.on("message", (data) => {
                console.log(data)
            })
          })
    }



module.exports = socketManager;