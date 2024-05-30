import { AdvancedMarker, Map } from "@vis.gl/react-google-maps";

export default function PropertyMap({
  lat,
  lng,
  id,
  id_image,
  location,
}: {
  lat: number | null;
  lng: number | null;
  id: number | null;
  id_image: number | null;
  location: string | null;
}) {
  if (lat && lng)
    return (
      <div className="w-full h-[500px]  ">
        <h2 className="p-1 font-thin border-b-2 mb-1 border-slate-300">
          Χάρτης ακινήτου στην περιοχή{" "}
          <span className="font-bold"> {location} </span>
          με κωδικό:{" "}
          <span className="font-bold">
            {id} {id_image}
          </span>
        </h2>
        <div className="w-full h-[80%]">
          <Map
            center={{ lat: lat, lng: lng }}
            mapId="ce5d7c7d5c3a8c26
          
          "
            defaultZoom={20}
          >
            <AdvancedMarker position={{ lat: lat, lng: lng }}></AdvancedMarker>
          </Map>
        </div>
      </div>
    );
}
