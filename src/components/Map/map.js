import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Filling } from "../Filling";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

export const Map = () => {
  const mapContainer = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZm9vdHppIiwiYSI6ImNqenU3aW9uajAwbHQzbW1yYjRlcGd5dHYifQ.JuyDnQXJ44WSLErdhTQO5g";

    new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.2656504, 59.8029126],
      zoom: 15
    });
  }, []);

  return (
    <View >
      <Container ref={mapContainer} />
      <Filling />
    </View>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  position: absolute;
  top: 0;
`;

const View = styled.div`
  position: relative;
  z-index: -10;
`