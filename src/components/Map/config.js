export const token =
  "pk.eyJ1IjoiZm9vdHppIiwiYSI6ImNqenU3aW9uajAwbHQzbW1yYjRlcGd5dHYifQ.JuyDnQXJ44WSLErdhTQO5g";

export const getInit = container => ({
  container,
  style: "mapbox://styles/mapbox/streets-v9",
  center: [30.2656504, 59.8029126],
  zoom: 15
});

export const getLayout = (id, coords) => ({
  id,
  type: "line",
  source: {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: coords
      }
    }
  },
  layout: {
    "line-join": "round",
    "line-cap": "round"
  },
  paint: {
    "line-color": "#ff0000",
    "line-width": 8
  }
});

export const getFlyData = center => ({
  center,
  speed: 1
});
