import socket from "./ws/wsManager.js";

class MarkerManager {
    #me;

    constructor(map, position, icon) {
        this.#me = this.newMarker(map, position, icon);
    }

    get getMe() {
        return this.#me;
    }

    newMarker(map, position, icon) {
        let values = { map: map, position: position, icon: icon };

        if (!position) values.position = map.getCenter();
        if (!icon)
            values.icon =
                "https://cdn.glitch.me/fbb65aa9-a4c0-481d-a5ba-b45d15f9e75f%2Fbus.png?v=1634458900680";
        const infoWindow = new google.maps.InfoWindow();
        const marker = new google.maps.Marker(values);

        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(this.getTitle());
          infoWindow.open(marker.getMap(), marker);
        })
        return marker;
    }
}

export default MarkerManager;
