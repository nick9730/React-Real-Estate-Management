import FilterTitle from "../../ui/FilterTitle";
import Select from "../../ui/Select";

export default function Rooms() {
  return (
    <div className="w-full h-fit flex  flex-col justify-center items-center gap-4">
      <FilterTitle>Δωμάτια</FilterTitle>

      <div className="w-full flex h-full">
        <Select
          role="bed"
          className="w-[100%] p-4 border-2 border-violet-50 max-lg:w-full rounded-xl bg-white text-black"
        />
        <Select
          className="w-[100%] p-4 border-2 border-violet-50 max-lg:w-full rounded-xl bg-white text-black"
          role="bath"
        />
      </div>
    </div>
  );
}
