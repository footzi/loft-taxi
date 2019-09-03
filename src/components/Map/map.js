import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { getProfile } from "../../modules/Profile";
import styled from "styled-components";
import Filling from "../Filling";
import Calling from "../Calling";
import Posted from "../Posted";
import * as config from "./config";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

const Map = ({ profile }) => {
  const mapContainer = useRef();
  const id = useRef("");
  const [map, setMap] = useState("");
  const [coords, setCoords] = useState([]);
  const [isOrder, setIsOrder] = useState(false);

  const removeLayout = () => {
    map.removeLayer(id.current);
    setIsOrder(false);
  };

  useEffect(() => {
    mapboxgl.accessToken = config.token;

    const map = new mapboxgl.Map(config.getInit(mapContainer.current));

    setMap(map);
  }, []);

  useEffect(() => {
    if (coords.length) {
      id.current = Date.now().toFixed();

      map.addLayer(config.getLayout(id.current, coords));
      map.flyTo(config.getFlyData(coords[0]));

      setIsOrder(true);
    }
  }, [coords, map]);

  return (
    <View>
      <Container ref={mapContainer} />
      {isOrder && <Posted removeLayout={removeLayout} />}
      {profile && !isOrder && <Calling setCoords={setCoords} />}
      {!profile && <Filling />}
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
`;

export default connect(state => ({
  profile: getProfile(state)
}))(Map);
