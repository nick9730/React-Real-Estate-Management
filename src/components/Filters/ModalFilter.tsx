import { usePropertiesContext } from "../Context/PropertiesContext";

import FiltersLayout from "./FiltersLayout";

export default function ModalFilter() {
  const { isFilter } = usePropertiesContext();
  return (
    <div className="w-screen z-50 h-full fixed top-0 bottom-0 p-0 m-0  lg:hidden bg-slate-100   flex flex-col items-center justify-center ">
      {isFilter === "mobile" && (
        <div className="w-full  h-fit z-50 p-3  overflow-y-scroll ">
          <FiltersLayout />
        </div>
      )}
    </div>
  );
}
