import { BiFilter } from "react-icons/bi";
import { usePropertiesContext } from "../Context/PropertiesContext";

export default function FilterModalButton() {
  const { isFilter, setIsFiltering } = usePropertiesContext();

  return (
    <>
      {isFilter === "mobile" && (
        <button
          className="flex items-center justify-center gap-0 fixed top-5 right-10 bg-navbar p-3 w-fit rounded-full text-white z-40 max-sm:relative max-sm:right-0 max-sm:top-1 "
          onClick={() => {
            setIsFiltering(true);
          }}
        >
          <BiFilter />
          Φίλτρα
        </button>
      )}
    </>
  );
}
