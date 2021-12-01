import {getMe, positionMarker } from "../MarkerManager.js";

const btnTrack = document.querySelector("#btnTrack");
const socket = io();

socket.on("connect", () => {
    console.log(socket.id);
});

socket.on("message", (data) => {
    console.log("You recive: " + data);
});

socket.on("myPosition", (data) => {
   if(data.id != socket.id) positionMarker(data);
});

let intervalID;
btnTrack.addEventListener("click", () => {

    if (btnTrack.textContent == "Track") {
        const name = prompt("Nombre");
        const id = socket.id;

        intervalID = setInterval(() => {
            let currentPosition = getMe().getPosition();
            socket.emit("myPosition", {id, name, currentPosition})
        }, 500) 

        btnTrack.textContent = "Untrack";
    } else {
        clearInterval(intervalID)
        btnTrack.textContent = "Track";
    }
});

export default socket;
