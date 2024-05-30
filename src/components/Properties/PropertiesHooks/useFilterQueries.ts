import { supabase } from "../../../Services/supabase";
import { usePropertiesContext } from "../../Context/PropertiesContext";
import { useGetUser } from "../../Users/useGetUser";

export const useFilterQueries = () => {
  const { filters } = usePropertiesContext();
  const { user } = useGetUser();

  const {
    baths,
    beds,
    region,
    areaParamMax,
    areaParamsMin,
    priceParamsMax,
    priceParamsMin,
    type,
  } = filters;

  let query = supabase.from("estates").select("*", { count: "exact" });
  if (user) {
    query = query.eq("user_id", user.id);
  } else {
    query = query;
  }

  if (baths) {
    query = query.gte("baths", baths);
  }

  if (region) {
    query = query.eq("location", region);
  }
  if (areaParamsMin) {
    query = query.gte("sqrt", areaParamsMin);
  }
  if (areaParamMax) {
    query = query.lte("sqrt", areaParamMax);
  }

  if (type) {
    query = query.eq("type", type);
  }
  if (priceParamsMax) {
    query = query.lte("price", priceParamsMax);
  }
  if (priceParamsMin) {
    query = query.gte("price", priceParamsMin);
  }

  if (beds) {
    query = query.gte("rooms", beds);
  }
  if (
    areaParamsMin === "0" ||
    areaParamsMin === null ||
    areaParamMax === "500" ||
    areaParamMax == null ||
    priceParamsMin === "0" ||
    priceParamsMin == null ||
    priceParamsMax === "1000000" ||
    priceParamsMax === null ||
    baths === "1" ||
    baths === null ||
    beds === "1" ||
    beds === null ||
    region === "" ||
    region == null ||
    type === "" ||
    type === null
  ) {
    query = query;
  }

  return query;
};
