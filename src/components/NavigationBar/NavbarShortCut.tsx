import { BiMenu } from "react-icons/bi";
import { NavbarProps } from "./Navbar";

import { motion, useDragControls } from "framer-motion";

export default function NavbarShortCut({ setClose, setPos, pos }: NavbarProps) {
  const handleDragEnd = (event: Event, info: { offset: { y: number } }) => {
    setPos(pos + info.offset.y);
    localStorage.setItem("pos_y", (pos + info.offset.y).toString());
  };

  const controls = useDragControls();

  let y;

  if (pos > 400) {
    y = pos - 340;
  }

  if (pos > 0 && pos < 400) {
    y = pos;
  }

  if (pos < 0) {
    y = pos + 100;
  }
  if (pos < -95) {
    y = 50;
  }
  if (pos > 800) {
    y = 800;
  }

  if (pos > 400 && window.innerWidth < 1024) {
    y = pos - 50;
  }

  if (pos > 0 && pos < 400 && window.innerWidth < 1024) {
    y = pos;
  }

  if (pos < 0 && window.innerWidth < 1024) {
    y = pos + 200;
  }

  if (pos < 120 && window.innerWidth < 1024) {
    y = 100;
  }
  if (pos > 800 && window.innerWidth < 1024) {
    y = 650;
  }

  return (
    <div>
      <motion.button
        drag="y"
        dragConstraints={{ top: 0, bottom: window.innerHeight - 100 }}
        dragControls={controls}
        dragElastic={0}
        dragMomentum={true}
        onClick={() => {
          setClose(false);
        }}
        className=" flex items-center justify-end  fixed  max-lg:left-0  max-lg:w-16 max-lg:h-20 z-[999] bg-navbar rounded-full rounded-l-3xl"
        onDragEnd={handleDragEnd}
        style={{ y: y }}
      >
        <BiMenu
          size={50}
          color="white"
          onClick={() => {
            setClose(false);
          }}
        />
      </motion.button>
    </div>
  );
}
