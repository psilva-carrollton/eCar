// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 27.9322, lng: -81.9598 };
  
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  // const marker = new AdvancedMarkerElement({
  //   map: map,
  //   position: position,
  //   title: "Uluru",
  // });
}

initMap();
