import FilterTitle from "../../ui/FilterTitle";
import { usePropertiesContext } from "../Context/PropertiesContext";
import { useGetOptionByRole } from "../Hooks/useGetOptionByRole";

export default function Region() {
  const role = "location";
  const { data: locations } = useGetOptionByRole(role);

  const { CreateParams, region, setPage } = usePropertiesContext();

  const active = region;

  return (
    <div className="w-full h-fit  flex flex-col items-center justify-center gap-3">
      <FilterTitle>Περιοχές</FilterTitle>
      <div className="w-full  h-fit flex flex-wrap gap-2  justify-center">
        {locations?.map((location) =>
          location.id === 21 ? (
            ""
          ) : (
            <label
              className=" basis-[47.33%]  h-[35px]   text-black font-thin text-2xl flex justify-center items-center gap-2 "
              key={location.id}
            >
              <button
                onClick={() => {
                  CreateParams("region", location?.name ? location.name : ""),
                    setPage(1);
                }}
                className={`w-full overflow-hidden  rounded-xl shadow-xl  ${active === location.name ? "bg-navbar text-white" : "bg-white"} hover:text-white hover:bg-navbar max-2xl:text-xl`}
              >
                {location.name}
              </button>
            </label>
          )
        )}
      </div>
    </div>
  );
}
