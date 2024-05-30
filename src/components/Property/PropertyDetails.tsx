import { BiHome } from "react-icons/bi";
import { BsBorderOuter } from "react-icons/bs";
import { FaBath } from "react-icons/fa6";
import { TbMeterSquare } from "react-icons/tb";
import Li from "../../ui/Li";

export default function PropertyDetails({
  baths,
  rooms,
  sqrt,
  type,
}: {
  baths: number | null;
  rooms: number | null;
  sqrt: number | null;
  type: string | null;
}) {
  return (
    <div className=" border-t-2 ">
      <ul className="w-full flex justify-center items-start gap-4  max-lg:p-2 max-lg:grid max-lg:grid-cols-2 ">
        <Li icon={<BsBorderOuter color="#461453" />} text="Δωμάτια" details>
          {rooms}
        </Li>
        <Li icon={<FaBath color="#461453" />} text="Μπάνια" details={true}>
          {baths}
        </Li>
        <Li icon={<TbMeterSquare color="#461453" />} details sqrt>
          {sqrt}
        </Li>
        <Li icon={<BiHome color="#461453" />} details>
          {type}
        </Li>
      </ul>
    </div>
  );
}
