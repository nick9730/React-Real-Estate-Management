import CategoryItem from "./CategoryItem";

import { useGetOptionByRole } from "../Hooks/useGetOptionByRole";

export default function Category() {
  const { data } = useGetOptionByRole("type");
  return (
    <div className="w-full h-fit   grid grid-cols-2 gap-5 items-center p-5">
      {data?.map((category) =>
        category.id === 19 ? null : (
          <ul
            className="shadow-xl  rounded-lg  bg-white  hover:text-white"
            key={category.name}
          >
            <CategoryItem category={category} />
          </ul>
        )
      )}
    </div>
  );
}
