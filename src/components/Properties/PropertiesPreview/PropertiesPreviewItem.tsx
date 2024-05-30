import { NavLink } from "react-router-dom";
import { useGetImages } from "../ImagesProperties/useGetImages";
import { useEffect, useState } from "react";
import PropertiesInfos from "./PropertiesInfos";
import { MdDelete } from "react-icons/md";
import { useDeleteProperties } from "../PropertiesHooks/useDeleteProperties";
import { usePropertiesContext } from "../../Context/PropertiesContext";
import { useDeleteImageByID } from "../../Property/PropertyHooks/useDeleteImageByID";

interface PropertiesPreviewListProps {
  baths: number | null;
  created_at: string;
  description: string | null;
  id: number;
  id_image: number;
  location: string | null;
  pos_x: number | null;
  pos_y: number | null;
  price: number | null;
  rooms: number | null;
  sqrt: number | null;
  type: string | null;
}

export default function PropertiesPreviewItem({
  property,
}: {
  property: PropertiesPreviewListProps;
}) {
  const { data } = useGetImages();
  const [imageEstate, setImageEstate] = useState<string | null>();
  const { deleteProperty } = useDeleteProperties();
  const { deleteImage } = useDeleteImageByID(data ? data?.length : 1);
  const { setIsEditing } = usePropertiesContext();

  useEffect(() => {
    if (data)
      for (let index = 0; index < data.length; index++) {
        if (property?.id_image === data[index].id_image) {
          setImageEstate(data[index].image);
        }
      }
  }, [data]);

  function Delete(id: number | undefined) {
    deleteProperty({ id });
    if (data)
      for (let index = 0; index < data.length; index++) {
        if (property?.id_image === data[index].id_image) {
          deleteImage({ id: property.id, name: data[index]?.image_name });
        }
      }
  }

  return (
    <li className="w-full h-[300px] relative">
      <NavLink
        to={`/property/${property?.id}`}
        className=" w-full h-full flex flex-col items-center "
        onClick={() => {
          setIsEditing("edit");
        }}
      >
        <img
          src={`${imageEstate}`}
          className="w-full h-[150px] border-2 rounded-t-xl  bg-slate-300"
        ></img>

        <PropertiesInfos property={property} />
      </NavLink>
      <button
        onClick={() => Delete(property?.id !== null ? property?.id : 1)}
        className="w-[120px] z-30 absolute p-3 right-3 top-[80%] flex justify-end text-navbar shadow-sm items-center rounded-xl shadow-black"
      >
        Διαγραφή
        <MdDelete size={20} color="red" />
      </button>
    </li>
  );
}
