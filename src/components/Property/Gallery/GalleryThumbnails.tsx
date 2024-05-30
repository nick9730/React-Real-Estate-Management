import { MdClose } from "react-icons/md";
import { Images } from "../../../Services/apiImage";
import { useDeleteImageByID } from "../PropertyHooks/useDeleteImageByID";
import Spinner from "../../../ui/Spinner";

export default function GalleryThumbnails({
  images,
  setIndex,
  index,
}: Omit<Images, "isLoading">) {
  const active = index;

  const { deleteImage, isPending } = useDeleteImageByID(1);

  if (isPending) return <Spinner />;
  return (
    <div className="w-full h-fit flex  overflow-auto  absolute bottom-0 lg:w-[50%] gap-2 ">
      {images?.map((image, i) => (
        <aside
          className=" min-w-[100px]   max-lg:ml-20 relative "
          key={image.id}
        >
          <img
            onClick={() => setIndex(i)}
            className={`w-[450px] h-[140px] rounded-lg z-0
            ${active === i ? "blur-sm" : ""}   `}
            src={`${image?.image}`}
            alt={`${image?.id}`}
          />
          <button
            onClick={() =>
              deleteImage({ id: image.id, name: image.image_name })
            }
            className="absolute top-0 right-0 p-2 bg-red-900 rounded-l-full"
          >
            <MdClose color="white" size={20} />
          </button>
        </aside>
      ))}
    </div>
  );
}
