import { usePropertiesContext } from "../Context/PropertiesContext";
import { OptionProps } from "../../Services/apiOption";

interface CategoryItemProps {
  category: OptionProps;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  const { CreateParams, type } = usePropertiesContext();

  const createParams = (name: string) => {
    CreateParams("type", name);
  };

  const active = type === category.name;

  if (category)
    return (
      <li className="w-full h-full flex flex-col items-center justify-center rounded-lg ">
        <button
          onClick={() => {
            createParams(category.name ? category.name : "");
          }}
          className={`w-full p-4 h-full flex flex-col items-center justify-center  hover:bg-navbar  ${active && "bg-navbar text-white"} rounded-lg text-sm `}
        >
          {category.name}
        </button>
      </li>
    );
}
