import PropertyDescription from "./PropertyDescription";
import PropertyDetails from "./PropertyDetails";
import PropertyMap from "./PropertyMap";
import PropertyTitle from "./PropertyTitle";

export type PropertyInformationProps = {
  estate?: {
    baths: number | null;
    sqrt: number | null;
    id: number | null;
    location: string | null;
    pos_x: number | null;
    pos_y: number | null;
    rooms: number | null;
    type: string | null;
    id_image: number | null;
    description: string | null;
    price: number | null;
  };
};

export default function PropertyInformation({
  estate,
}: PropertyInformationProps) {
  if (!estate) return;
  const {
    baths,
    rooms,
    sqrt,
    id,
    id_image,
    location,
    pos_x,
    pos_y,
    price,
    type,
    description,
  } = estate;
  return (
    <div className="w-full h-fit  lg:p-2 bg-white flex flex-col gap-2 rounded-xl shadow-xl shadow-purple-500">
      <PropertyTitle type={type} location={location} price={price} />

      <PropertyDetails baths={baths} rooms={rooms} sqrt={sqrt} type={type} />
      <PropertyDescription description={description} />
      <PropertyMap
        lat={pos_x}
        lng={pos_y}
        id={id}
        id_image={id_image}
        location={location}
      />
    </div>
  );
}
