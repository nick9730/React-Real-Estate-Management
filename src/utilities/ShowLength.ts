import { InfiniteData } from "@tanstack/react-query";
import { properties } from "../components/Properties/properties.types";

export const ShowLegth = (
  estates: InfiniteData<properties, unknown> | undefined
) => {
  let length: number | unknown;
  if (estates?.pageParams?.length)
    for (let index = 0; index < estates?.pageParams?.length; index++) {
      length =
        estates?.pages[index]?.nextPage === null
          ? estates?.pages[index]?.count
          : estates.pageParams[index];
    }

  return length;
};
