import { Images } from "../../Services/apiImage";
import Spinner from "../../ui/Spinner";
import GalleryLayout from "./Gallery/GalleryLayout";

export default function PropertyImages({
  images,
  isLoading,
}: Omit<Images, "setIndex" | "index">) {
  return (
    <div className="w-full h-full flex justify-center items-start max-lg:items-end max-lg:w-full shadow-xl shadow-navbar ">
      {isLoading ? <Spinner /> : <GalleryLayout images={images} />}
    </div>
  );
}
