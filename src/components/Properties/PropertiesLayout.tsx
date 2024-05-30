import FiltersLayout from "../Filters/FiltersLayout";

import PropertiesPreview from "./PropertiesPreview/PropertiesPreview";
import { usePropertiesContext } from "../Context/PropertiesContext";
import ModalFilter from "../Filters/ModalFilter";
import { useDetectWidth } from "../Hooks/useDetectWidth";
import { useEffect, useState } from "react";
import GoogleMap from "../Map/GoogleMap";
import Button from "../../ui/Button";
import FilterModalButton from "./FilterModalButton";
import ModalMapLayout from "./ModalMapLayout";

export default function PropertiesLayout() {
  const { isFiltering, setWidth, isFilter, setIsFilter, width } =
    usePropertiesContext();

  const [mobileOpenMap, setMobileOpenMap] = useState<boolean>(false);
  const [modal, setModal] = useState<"mobile" | "desktop">(
    width < 1024 ? "mobile" : "desktop"
  );
  const [roleButton, setRoleButton] = useState<"openMap" | "openListing">(
    "openMap"
  );

  useEffect(() => {
    if (width < 1024) {
      setModal("mobile");
    } else {
      setModal("desktop");
    }
  }, [width]);

  useDetectWidth(setWidth);

  useEffect(() => {
    if (width < 1024) {
      setIsFilter("mobile");
    } else {
      setIsFilter("desktop");
    }
  }, [width]);
  return (
    <>
      <div className="w-full h-[100%]   flex flex-row justify-center items-center  lg:p-5 bg-fuchsia-100 gap-6  scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-navbar  max-lg:gap-5  max-sm:gap-2 max-lg:items-center max-lg:justify-center max-sm:flex-col  ">
        <FilterModalButton />
        {isFilter === "desktop" && <FiltersLayout />}
        <PropertiesPreview />
        {modal === "desktop" && <GoogleMap role="map" />}

        {isFiltering && <ModalFilter />}

        {width < 1024 && roleButton === "openMap" && (
          <Button
            setValue={setMobileOpenMap}
            value={mobileOpenMap}
            roleButton="openMap"
            onClick={() => setRoleButton("openListing")}
          />
        )}

        {mobileOpenMap && width < 1024 && (
          <ModalMapLayout
            setMobileOpenMap={setMobileOpenMap}
            mobileOpenMap={mobileOpenMap}
            setRoleButton={setRoleButton}
            roleButton={"openListing"}
          />
        )}
      </div>
      <></>
    </>
  );
}
