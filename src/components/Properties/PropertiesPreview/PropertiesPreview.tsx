import FilterTitle from "../../../ui/FilterTitle";
import { ShowLegth } from "../../../utilities/ShowLength";
import { useGetAllProperties } from "../PropertiesHooks/useGetAllProperties";

import PropertiesPreviewList from "./PropertiesPreviewList";

export interface PropertiesPreviewProps {
  isLoading?: boolean;
  role?: "map" | "mapLatLng";
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PropertiesPreview() {
  const { estates } = useGetAllProperties();
  const lengthEstates = ShowLegth(estates);

  return (
    <div className="w-[100%]  h-full  p-5  rounded-xl bg-slate-100 gap-10 overflow-y-hidden    flex flex-col justify-start  items-center z-0   ">
      <FilterTitle>
        Ακίνητα{" "}
        {!lengthEstates ? "" : lengthEstates + "/" + estates?.pages[0].count}
      </FilterTitle>
      <PropertiesPreviewList />
    </div>
  );
}
