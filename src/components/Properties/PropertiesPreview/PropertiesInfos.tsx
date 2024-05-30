import { BiBath, BiBed, BiSquareRounded } from "react-icons/bi";
import Li from "../../../ui/Li";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { data } from "../properties.types";

export default function PropertiesInfos({ property }: { property: data }) {
  return (
    <div className="w-full h-full p-2 font-serif z-0">
      <h2 className="text-3xl">{property?.location}</h2>
      <ul className="w-full flex gap-1 p-2">
        <Li icon={<BiBed size={20} color=" #461453" />} text="Κρεβάτια">
          {property?.rooms}
        </Li>
        <Li icon={<BiBath size={20} color="#461453" />} text="Μπάνια">
          {property?.baths}
        </Li>{" "}
        <Li icon={<BiSquareRounded size={20} color="#461453" />} text="m²">
          {property?.sqrt}
        </Li>
      </ul>

      <div className="w-full h-[50px] flex justify-start items-end relative">
        <h2 className="text-2xl text-navbar">
          {property?.price && formatCurrency(property?.price) + "€"}
        </h2>
      </div>
    </div>
  );
}
