import { formatCurrency } from "../../utilities/formatCurrency";

export default function PropertyTitle({
  type,
  location,
  price,
}: {
  type: string | null;
  location: string | null;
  price: number | null;
}) {
  return (
    <div className="w-[100%] h-fit flex flex-col justify-center items-center gap-2 ">
      <h2 className=" w-full h-full flex justify-center items-center  text-4xl max-lg:text-xl font-bold text-navbar p-2">
        {type}-{"Πώληση"}-{location}
      </h2>
      <div className="w-[50%] max-xl:w-full h-full  grid grid-cols-3   justify-center items-center p-2   ">
        <label className="w-full flex justify-center items-center font-bold gap-1 ">
          <span className="text-navbar font-bold text-xl">{location}</span>
        </label>
        <label className="w-full justify-center flex items-center font-bold">
          <span className="text-navbar font-bold text-xl">
            {formatCurrency(price !== null ? price : 1) + " " + "€"}
          </span>
        </label>
        <label className="w-full justify-center flex items-center font-bold">
          <span className="text-navbar font-bold text-xl ">Προς Πώληση</span>
        </label>
      </div>
    </div>
  );
}
