import { Map } from "@vis.gl/react-google-maps";
import AdvancedMarkerEstates from "./AdvancedMarkerEstates";
import FilterTitle from "../../ui/FilterTitle";
import { usePropertiesContext } from "../Context/PropertiesContext";
import { useGetAllProperties } from "../Properties/PropertiesHooks/useGetAllProperties";
import { ShowLegth } from "../../utilities/ShowLength";
import CloseMapButton from "./CloseMapButton";

export default function GoogleMap({
  role,
  setIsOpen,
}: {
  role: "map" | "mapLatLng" | "modalMap";
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setLatLng } = usePropertiesContext();
  const { estates } = useGetAllProperties();
  const lengthEstates = ShowLegth(estates);

  const data = estates?.pages[0].data;

  const lat: number =
    role === "map" && data && data[0]?.pos_x !== null
      ? data[0]?.pos_x
      : 40.32830775403965;
  const lng: number =
    role === "map" && data && data[0]?.pos_y !== null
      ? data[0]?.pos_y
      : 23.980325734120857;

  const GetLatLng = (value: google.maps.LatLngLiteral | null) => {
    if (role === "map") return;
    if (role === "mapLatLng") {
      setLatLng(value);
      setIsOpen && setIsOpen(false);
    }
  };

  return (
    <div
      className={
        role === "map"
          ? `w-[90%] max-lg:w-full h-full flex flex-col justify-center items-center`
          : role === "mapLatLng"
            ? "w-screen h-full fixed top-0  right-0 bottom-0 flex flex-col justify-center items-center bg-slate-800 z-40 "
            : role === "modalMap"
              ? "w-screen h-full fixed top-0  right-0 bottom-0 flex flex-col justify-center items-center bg-slate-100  z-20  "
              : ""
      }
    >
      <div
        className={
          role !== "mapLatLng" && role !== "modalMap"
            ? `w-full h-[100%] max-lg:h-[600px] rounded-2xl p-3 bg-slate-100 flex flex-col justify-center items-center gap-5 relative`
            : "w-full h-full flex flex-col items-center justify-center gap-1"
        }
      >
        {role === "map" || role === "modalMap" ? (
          <FilterTitle>
            Χάρτης{" "}
            {!lengthEstates
              ? ""
              : lengthEstates + "/" + estates?.pages[0].count}
          </FilterTitle>
        ) : (
          ""
        )}

        <div className="w-full h-full ">
          <Map
            defaultZoom={role === "map" ? 15 : 17}
            defaultCenter={{ lat: lat, lng: lng }}
            mapId="ce5d7c7d5c3a8c26"
            onClick={(value) => GetLatLng(value.detail.latLng)}
          >
            {role === "map" || role === "modalMap" ? (
              <AdvancedMarkerEstates />
            ) : (
              ""
            )}
          </Map>

          <CloseMapButton setIsOpen={setIsOpen} role={role} />
        </div>
      </div>
    </div>
  );
}
