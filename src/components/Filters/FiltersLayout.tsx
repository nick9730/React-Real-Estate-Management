import { useEffect, useState } from "react";
import Category from "../Category/Category";
import RangeInput from "../../ui/RangeInput";

import FilterTitle from "../../ui/FilterTitle";
import Rooms from "./Rooms";
import Region from "./Region";
import { useGetOptionByRole } from "../Hooks/useGetOptionByRole";
import Spinner from "../../ui/Spinner";
import {
  AREA,
  PRICE,
  usePropertiesContext,
} from "../Context/PropertiesContext";
import FilterButton from "./FilterButton";

export default function FiltersLayout() {
  const {
    Reset,
    isReseting,
    setIsReseting,
    priceParamsMax,
    priceParamsMin,
    areaParamMax,
    areaParamsMin,
    isFilter,
  } = usePropertiesContext();

  const { data: maxPrice } = useGetOptionByRole("price");
  const { data: maxArea } = useGetOptionByRole("area");

  const [price, setPrice] = useState<
    | number
    | [number, number]
    | [string | number | null, string | number | null]
    | unknown
  >([priceParamsMin, priceParamsMax || PRICE]);

  const [area, setArea] = useState<
    | number
    | [number, number]
    | [string | number | null, string | number | null]
    | unknown
  >([areaParamsMin, areaParamMax || AREA]);

  const { isLoading } = useGetOptionByRole("location");

  useEffect(() => {
    if (isReseting) {
      setArea([areaParamsMin, areaParamMax]);
      setPrice([priceParamsMin, priceParamsMax]);
    }
    setIsReseting(false);
  }, [Reset]);

  return (
    <div
      className={`${
        isFilter === "mobile"
          ? "w-full lg:hidden  h-fit  flex flex-col justify-center items-center    rounded-xl  bg-slate-100 max-md:gap-5 relative   "
          : "w-[55%] max-xl:w-[70%] max-lg:hidden  h-full    flex flex-col justify-start items-center     max-lg:w-full p-3 rounded-xl   bg-slate-100 gap-6 relativev overflow-y-scroll  scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-navbar"
      } `}
    >
      <FilterTitle>Φίλτρα</FilterTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Category />
          <RangeInput
            setValue={setPrice}
            value={price as number}
            role="price"
            max={maxPrice?.at(0)?.number}
            diffrenceValue={300000}
          />
          <RangeInput
            setValue={setArea}
            value={area as number}
            role="area"
            max={maxArea?.at(0)?.number}
            diffrenceValue={60}
          />

          <Rooms />
          <Region />
          <FilterButton />
        </>
      )}
    </div>
  );
}
