const socket = io();
/*
const btnSend = document.querySelector("#btnSend");
const txtMsg = document.querySelector("#txtMsg");
const btnEmit = document.querySelector("#btnEmit");
*/



/*

btnSend.addEventListener("click", () => {
    socket.send(txtMsg.value);
});

btnEmit.addEventListener('click', () => {
  socket.emit('chat1', txtMsg.value)
})
*/
socket.on("connect", () => {
    console.log(socket.id);
});

socket.on("message", (data) => {
    console.log("You recive: " + data);
});

socket.on("chat1", (data) => {
    console.group("Chat 1");
    console.log(data);
    console.groupEnd("Chat 1");
});



export default socket;
