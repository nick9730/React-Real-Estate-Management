import { FileProps } from "../AddPropertyHooks/addform.type";
import Image from "./Image";

type ThumbnailsProps = {
  images: FileProps[] | undefined;
  DeleteFiles: (name: string | undefined) => void;
};

export default function Thumbnails({ images, DeleteFiles }: ThumbnailsProps) {
  return (
    <div className="w-[35rem] h-full  inline-flex justify-center gap-3 items-center border-2 border-slate-300 rounded-2xl p-6   ">
      {images?.map((image) => (
        <div className=" w-[20rem]] h-[10rem]     relative" key={image?.name}>
          <Image image={image} />
          <button
            className="  text-2xl text-white  p-2 w-10 absolute top-[-10px] right-[-10px] bg-transparent z-30 rounded-l-full bg-red-950 "
            onClick={() => DeleteFiles(image?.name)}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
}
