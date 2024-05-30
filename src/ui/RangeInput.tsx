import React, { useEffect } from "react";
import FilterTitle from "./FilterTitle";
import { formatCurrency } from "../utilities/formatCurrency";
import {
  AREA,
  PRICE,
  usePropertiesContext,
} from "../components/Context/PropertiesContext";
import { Price } from "../utilities/StyleoRangeInput";

type RangeInputProps = {
  setValue: React.Dispatch<
    React.SetStateAction<number | [number, number] | number>
  >;
  value: number;

  role: "price" | "area";
  max: number | null | undefined;
  diffrenceValue: number;
};

export default function RangeInput({
  max,
  setValue,
  value,
  role,
  diffrenceValue,
}: RangeInputProps) {
  const { CreateParams } = usePropertiesContext();

  const OnChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    console.log(event);

    if (!Array.isArray(newValue)) {
      return;
    }

    if (!Array.isArray(value)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([
        Math.min(+newValue[0], +value[1] - +diffrenceValue),
        +value[1],
      ]);
    } else {
      setValue([
        +value[0],
        Math.max(+newValue[1], +value[0] + +diffrenceValue),
      ]);
    }
  };

  useEffect(() => {
    if (!Array.isArray(value)) {
      return;
    }
    if (role === "price") {
      CreateParams("price_min", value[0]);
      if (value[1] === PRICE) return;
      CreateParams("price_max", value[1]);
    }
    if (role === "area") {
      CreateParams("area_min", value[0]);
      if (value[1] === AREA) return;

      CreateParams("area_max", value[1]);
    }
  }, [value]);

  return (
    <div className="w-full h-fit  bg-white border-5  flex  flex-col justify-center items-center p-4 shadow-2xl rounded-lg">
      <FilterTitle>
        {role === "price" ? "Περιοχή Τιμών" : "Μέγεθος Ακινήτου"}
      </FilterTitle>

      <Price
        value={value}
        valueLabelDisplay="on"
        disableSwap
        onChange={OnChange}
        max={max}
        valueLabelFormat={(value: number) => (
          <div className="w-12 text-[10px] text-center whitespace-normal ">
            {role === "price" ? formatCurrency(value) + "€" : value + "m²"}
          </div>
        )}
        className="bg-transparent"
      />
    </div>
  );
}
