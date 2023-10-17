const ACCESS_TOKEN =
  "pk.eyJ1IjoiYWxqb3NhYm9zIiwiYSI6ImNsbDBrYnV3cjJhMHQzcHBwY3NiODI4eHcifQ.A45iTsrExvB6CMfBBG93-A";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    container: "map",
    accessToken: ACCESS_TOKEN,
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15,
  });

  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls);

  const directionControls = new MapboxDirections({
    accessToken: ACCESS_TOKEN,
  });

  map.addControl(directionControls, "top-left");
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(error) {
  setupMap([-2.24, 53.48]);
}
