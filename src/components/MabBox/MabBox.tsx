import { useTranslation } from 'react-i18next'
import Map, {Marker} from 'react-map-gl';
import { useState } from 'react';

const MabBox = () => {
  const { t } = useTranslation()
  const token = process.env.REACT_APP_MAPBOX_TOKEN

  const [viewState, setViewState] = useState({
    latitude: 39.8283,
    longitude: -98.5795,
    zoom: 3.5
  });

  return (
    <Map
      {...viewState}
      id="mapBox-NS"
      onMove={event => setViewState(event.viewState)}
      mapStyle="mapbox://styles/ravengar/cleg6g0ge001y01lk4cufk89o"
      mapboxAccessToken={token}
    >
    </Map>
  )
}

export default MabBox