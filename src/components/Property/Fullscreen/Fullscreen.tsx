import { MdClose } from "react-icons/md";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

import { useOutside } from "../../Hooks/useOutside";

interface FullsreenProps {
  Next: () => void;
  Prev: () => void;
  index: number;
  images: {
    created_at: string;
    id: number;
    id_image: number | null;
    image: string | null;
  }[];
  setFullsreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Fullscreen({
  setFullsreen,
  Prev,
  Next,
  images,
  index,
}: FullsreenProps) {
  const ref = useOutside(setFullsreen);
  return (
    <div className="fixed z-50 w-full h-full flex justify-center items-center rounded-none top-0 left-0 backdrop-blur-xl ">
      <div
        ref={ref}
        className="w-[80%] h-[80%] max-lg:h-[50%] max-lg:w-full relative flex  items-center justify-center rounded-xl p-2 "
      >
        <button className="absolute left-3 top-[50%] " onClick={() => Prev()}>
          <FaCircleArrowLeft size={40} color="silver" />
        </button>
        <button className="absolute right-3 top-[49%]" onClick={Next}>
          <FaCircleArrowRight size={40} color="silver" />
        </button>
        <img
          className="w-full h-[100%]  rounded-xl "
          src={`${images[index]?.image}`}
          alt={`${images[index]?.id}`}
        />
        <button
          onClick={() => {
            setFullsreen(true);
          }}
          className="absolute  right-3 top-2"
        >
          <MdClose size={40} color="silver" />
        </button>
      </div>
    </div>
  );
}
