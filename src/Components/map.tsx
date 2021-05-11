import { ReactElement, FunctionComponent } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

interface MapProps {
  coordinates: {
    latitude: number,
    longitude: number
  },
  isMarkerShown: boolean,
  googleMapURL: string,
  loadingElement: ReactElement,
  containerElement: ReactElement,
  mapElement: ReactElement
}

const MyMapComponent: FunctionComponent<MapProps> = ({
  coordinates: {
    latitude,
    longitude
  },
  isMarkerShown,
}) => <GoogleMap
  defaultZoom={8}
  defaultCenter={{lat: latitude, lng: longitude}}
>
    {isMarkerShown && <Marker position={{ lat: latitude, lng: longitude }}/>}
  </GoogleMap>


export default withScriptjs(withGoogleMap(MyMapComponent)) 