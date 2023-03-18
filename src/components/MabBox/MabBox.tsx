import { useTranslation } from 'react-i18next';
import Map, { Marker } from 'react-map-gl';
import { useState } from 'react';
import Image from 'next/image';

const MabBox = () => {
  const { t } = useTranslation();
  const token = process.env.REACT_APP_MAPBOX_TOKEN;

  const [viewState, setViewState] = useState({
    latitude: 33.903284132208526,
    longitude: -117.94522595425906,
    zoom: 8.83,
  });

  return (
    <Map
      {...viewState}
      id="mapBox-NS"
      onMove={(event) => setViewState(event.viewState)}
      mapStyle="mapbox://styles/ravengar/cleg6g0ge001y01lk4cufk89o"
      mapboxAccessToken={token}
    >
      <Marker longitude={-118.15937045855739} latitude={33.919123017099594}>
        <Image src="/images/NS.png" alt="NS.png" width={0} height={0} />
        <span id="mapBox-marker" className="h-5 w-5 flex items-center justify-center rotate-45 cursor-pointer">
          <span className="absolute h-5 w-5 animate-ping bg-orange-500 opacity-75" />
          <span className="h-4 w-4 bg-orange-600 opacity-90" />
        </span>
      </Marker>
    </Map>
  );
};

export default MabBox;
