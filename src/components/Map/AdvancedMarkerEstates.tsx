import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { useGetAllProperties } from "../Properties/PropertiesHooks/useGetAllProperties";
import { data } from "../Properties/properties.types";

export default function AdvancedMarkerEstates() {
  const { estates } = useGetAllProperties();

  return (
    <>
      {estates?.pages.map((data) =>
        data.data.map((estate: data) => {
          return (
            <AdvancedMarker
              key={estate.id}
              position={
                estate.pos_x !== null && estate.pos_y !== null
                  ? { lat: estate.pos_x, lng: estate.pos_y }
                  : null
              }
            >
              <Pin
                background={"#FBBC04"}
                glyphColor={"#000"}
                borderColor={"#000"}
              />
            </AdvancedMarker>
          );
        })
      )}
    </>
  );
}
