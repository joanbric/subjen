let _map;
let _me;
let _markers = [];
let _whatcherID_me;

function setMe(map, options) {
    _map = map;
    _me = newMarker(options);
    _markers = [];
    _watcherID_me = navigator.geolocation.watchPosition(
        (position) => {
            const currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            _me.setPosition(currentPosition);
        },
        null,
        { enableHighAccuracy: true }
    );
}
function getMe() {
    return _me;
}

function newMarker(options = {}) {
    if(!_map) throw new Error("No have any map to create a marker")
    let markerOptions = {
        map: _map,
        position: options.position,
        icon: options.icon,
        title: options.title,
    };

    if (!options.position) markerOptions.position = _map.getCenter();
    if (!options.icon)
        markerOptions.icon =
            "https://cdn.glitch.me/fbb65aa9-a4c0-481d-a5ba-b45d15f9e75f%2Fbus.png?v=1634458900680";

    const infoWindow = new google.maps.InfoWindow();
    const marker = new google.maps.Marker(markerOptions);

    marker.addListener("click", (e) => {
        infoWindow.close();
        infoWindow.setOptions({ minWidth: 50 });
        infoWindow.setContent(options.title || "");
        infoWindow.open(marker.getMap(), marker);
    });

    if (!_me) return marker;
    if (!id) throw new Error("To create other markers you need an id");

    _markers[id] = marker;
}

function positionMarker(options) {
    if (!options.id) newMarker(options);
    if (!options.position)
        throw new Error(
            "To reposition a marker is necesary the new position. Position not valid"
        );
    _markers[id].setPosition(options.position);
}

export {
    setMe,
    getMe,
    positionMarker,
};
// class MarkerManager {
//     #map;
//     #me;
//     #watcherID_me;
//     #markers;

//     constructor(map, options) {
//         this.#map = map;
//         this.#me = this.newMarker(options);
//         this.#markers = [];
//         this.#watcherID_me = navigator.geolocation.watchPosition(
//             (position) => {
//                 const currentPosition = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude,
//                 };

//                 this.#me.setPosition(currentPosition);
//             },
//             null,
//             { enableHighAccuracy: true }
//         );
//     }

//     get getMe() {
//         return this.#me;
//     }

//     newMarker(options) {
//         let markerOptions = {
//             map: this.#map,
//             position: options.position,
//             icon: options.icon,
//             title: options.title,
//         };

//         if (!options.position) markerOptions.position = this.#map.getCenter();
//         if (!options.icon)
//             markerOptions.icon =
//                 "https://cdn.glitch.me/fbb65aa9-a4c0-481d-a5ba-b45d15f9e75f%2Fbus.png?v=1634458900680";

//         const infoWindow = new google.maps.InfoWindow();
//         const marker = new google.maps.Marker(markerOptions);

//         marker.addListener("click", (e) => {
//             infoWindow.close();
//             infoWindow.setOptions({ minWidth: 50 });
//             infoWindow.setContent(options.title || "");
//             infoWindow.open(marker.getMap(), marker);
//         });

//         if (!this.#me) return marker;
//         if (!id) throw new Error("To create other markers you need an id");

//         this.#markers[id];
//     }

//     positionMarker(options) {
//         if (!options.id) this.newMarker(options);
//         if (!options.position)
//             throw new Error(
//                 "To reposition a marker is necesary the new position. Position not valid"
//             );
//         this.#markers[id].setPosition(options.position);
//     }
// }

// function MarkerManagerSingle() {
//     let markerManager;
//     return (map, options) => {
//         if (!markerManager) {
//             markerManager = new MarkerManager(map, options);
//         }
//         return markerManager;
//     };
// }

// const markerManagerSingle = MarkerManagerSingle();
