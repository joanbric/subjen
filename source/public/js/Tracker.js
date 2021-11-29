import socket from "./ws/wsManager.js";

class Tracker {
    #tracks;
    #paths;
    #map;
    #marker;
    
    constructor(map, marker) {
        this.#tracks = {};
        this.#paths = {};
        this.#map = map;
        this.#marker = marker;
    }

    trackMe(id) {
        let intervalID_me;
        try {
            if (this.#tracks[id]) {
                alert("That id already exist.");
                return null
            }
            const path = this.newPath(id);
            this.#tracks[id] = [];

            intervalID_me = setInterval(() => {
                const currentPosition = this.#marker.getPosition();

                this.#tracks[id].push(currentPosition);
                path.setPath(this.#tracks[id]);
                socket.emit("myPosition", {
                    id: socket.id,
                    name: id,
                    currentPosition,
                });
            }, 500);

            path.setMap(this.#map);
        } catch (err) {
            alert(err.message);
        }
        return intervalID_me;
    }

    untrackMe(intervalID) {
        clearInterval(intervalID);
    }

    newPath(id) {
        this.#paths[id] = new google.maps.Polyline({
            //path: track,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 5,
        });

        return this.#paths[id];
    }
}

export default Tracker;
