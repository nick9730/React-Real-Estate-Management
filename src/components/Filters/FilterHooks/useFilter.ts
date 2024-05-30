import { usePropertiesContext } from "../../Context/PropertiesContext";
import { data } from "../../Properties/properties.types";
export const useFilter = (estates: data[] | undefined | null) => {
  const {
    priceParamsMax,
    priceParamsMin,
    areaParamMax,
    areaParamsMin,
    beds,
    baths,
    region,
    type,
  } = usePropertiesContext();

  let filteredDatas: data[] | undefined | null;

  const filterType = type ? type : "";

  if (filteredDatas) {
    if (filterType) {
      filteredDatas = filteredDatas?.filter((property) => {
        return property?.type
          ?.toLocaleLowerCase()
          ?.includes(filterType ? filterType.toLocaleLowerCase() : "");
      });
    }

    if (region) {
      filteredDatas = filteredDatas?.filter((property) => {
        return property?.location
          ?.toLocaleLowerCase()
          .includes(region ? region.toLocaleLowerCase() : "");
      });
    }

    if (baths) {
      filteredDatas = filteredDatas?.filter((property) => {
        return property.baths !== null && property?.baths >= parseInt(baths);
      });
    }
    if (beds) {
      filteredDatas = filteredDatas?.filter((property) => {
        return property.rooms !== null && property?.rooms >= parseInt(beds);
      });
    }

    if (priceParamsMax) {
      filteredDatas = filteredDatas?.filter((property) => {
        return (
          property.price !== null &&
          property?.price <=
            parseInt(typeof priceParamsMax === "string" ? priceParamsMax : "")
        );
      });
    }

    if (priceParamsMin) {
      filteredDatas = filteredDatas?.filter((property) => {
        return (
          property.price !== null &&
          property?.price >=
            parseInt(typeof priceParamsMin === "string" ? priceParamsMin : "")
        );
      });
    }

    if (areaParamsMin) {
      filteredDatas = filteredDatas?.filter((property) => {
        return (
          property.sqrt !== null &&
          property?.sqrt >=
            parseInt(typeof areaParamsMin === "string" ? areaParamsMin : "")
        );
      });
    }

    if (areaParamMax) {
      filteredDatas = filteredDatas?.filter((property) => {
        return (
          property.sqrt !== null &&
          property?.sqrt <=
            parseInt(typeof areaParamMax === "string" ? areaParamMax : "")
        );
      });
    }
  } else {
    filteredDatas = estates;
  }

  return { filteredDatas };
};
