import scrypt from "./js/script-apimap.js";
import getMap from "./js/build-map.js";
import { setMe } from "./js/MarkerManager.js";
import Tracker from "./js/Tracker.js";

import socket from "./js/ws/wsManager.js";

let idTrackWatcher;

window.initMap = async function () {
    const map = await getMap();
    // try {

    
    setMe(map);
    // const otherMarker = markerManager.newMarker(map);

    // me.setLabel("Me")
    // const watcherID_me = navigator.geolocation.watchPosition(
    //     (position) => {
    //         const currentPosition = {
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude,
    //         };

    //         me.setPosition(currentPosition);
    //         //map.setCenter(currentPosition);
    //     },
    //     null,
    //     { enableHighAccuracy: true }
    // );

    // const tracker = new Tracker(map, me);

    // socket.on('myPosition', (data) => {
    //     otherMarker.setPosition(data.currentPosition);
    //     otherMarker.setTitle(data.name)
    //   })

    // } catch (err) {
    //     console.error(err.message);
    // }
};

document.head.appendChild(scrypt);

/*
function loadServiceWorker() {
    if (!("serviceWorker" in navigator))
        throw new Error(`Your browser doesn't support ServiceWorker`);

    window.addEventListener("load", async () => {
        try {
            const regist = await navigator.serviceWorker.register("./sw.js");
            console.log("ServiceWorker registred successful with scope: ", (await regist).scope)
        } catch (err) {
            console.error(err);
        }
    });
}

loadServiceWorker()
*/
