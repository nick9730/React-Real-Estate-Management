import { usePropertiesContext } from "../Context/PropertiesContext";

export default function FilterButton() {
  const {
    priceParamsMax,
    priceParamsMin,
    areaParamMax,
    areaParamsMin,
    beds,
    baths,
    region,
    type,
    Reset,
  } = usePropertiesContext();
  const { setIsFiltering, isFilter } = usePropertiesContext();

  return (
    <div className="w-full flex  justify-center gap-3">
      {(areaParamMax !== null && areaParamMax !== "500") ||
      (areaParamsMin !== null && areaParamsMin !== "0") ||
      (priceParamsMax !== "" &&
        priceParamsMax !== "1000000" &&
        priceParamsMax !== null) ||
      (priceParamsMin !== null &&
        priceParamsMin !== "0" &&
        priceParamsMin !== null) ||
      (beds !== "" && beds !== "1" && beds !== null) ||
      (baths !== "" && baths !== "1" && baths !== null) ||
      (region !== null && region !== "") ||
      (type !== null && type !== "") ? (
        <button
          className="bg-red-500
        w-fit
        rounded-full
        p-3
        text-white
        "
          onClick={() => {
            Reset();
          }}
        >
          Διαγραφή Φίλτρων
        </button>
      ) : (
        ""
      )}
      <>
        {isFilter === "mobile" && (
          <button
            onClick={() => {
              setIsFiltering(false);
            }}
            className="w-fit    rounded-full  p-3 bg-button   text-white"
          >
            Κλείσιμο Φίλτρων
          </button>
        )}
      </>
    </div>
  );
}
