import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Fullscreen from "../Fullscreen/Fullscreen";
import { BiFullscreen } from "react-icons/bi";
import { useEffect, useState } from "react";

export type GalleryProps = {
  images: {
    created_at: string;
    id: number;
    id_image: number | null;
    image: string | null;
  }[];
  index: number;
  fullsrceen: boolean;
  setFullsreen: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};
export default function Gallery({
  images,
  setIndex,
  setFullsreen,
  fullsrceen,
  index,
}: GalleryProps) {
  const [active, setActive] = useState<number>(0);

  if (!images) return;

  const Next = () => {
    if (index === images?.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const Prev = () => {
    if (index === 0) {
      setIndex(images?.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    if (!fullsrceen) {
      setActive(index);
    }
  }, [fullsrceen]);

  return (
    <div className="w-full h-[500px]  cursor-auto  max-sm:h-[300px] rounded-xl ">
      <button className="absolute left-1 top-[50%]  z-40 " onClick={Prev}>
        <FaCircleArrowLeft size={40} color="silver" />
      </button>

      <img
        className="w-full h-[500px] max-sm:h-[300px] rounded-xl z-40"
        src={`${images[!fullsrceen ? active : index]?.image}`}
        alt={`${images[index]?.id}`}
      />

      <button className="absolute right-1 top-[50%] z-30" onClick={Next}>
        <FaCircleArrowRight size={40} color="silver" />
      </button>

      <button
        onClick={() => setFullsreen(false)}
        className="absolute bottom-0  right-1 z-40"
      >
        <BiFullscreen size={40} color="white" />
      </button>

      {fullsrceen === false && (
        <Fullscreen
          setFullsreen={setFullsreen}
          Prev={Prev}
          Next={Next}
          images={images}
          index={index}
        />
      )}
    </div>
  );
}
