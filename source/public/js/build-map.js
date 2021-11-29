import initPosition from "./initPosition.js";
let map;

async function getMap() {
    if (map) return map;
    try {
        const { lat, lng } = await initPosition();
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: lat, lng: lng },
            zoom: 18,
            disableDefaultUI: true,
        });
    } catch (err) {
        map = null;
        alert(err.message);
    }
    return map;
}

export default getMap;
