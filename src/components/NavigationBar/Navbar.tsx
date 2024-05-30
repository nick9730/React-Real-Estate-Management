import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import NavbarShortCut from "./NavbarShortCut";
import { useOutside } from "../Hooks/useOutside";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface NavbarProps {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  close: boolean;
  pos: number;
  setPos: React.Dispatch<React.SetStateAction<number>>;
}

export default function Navbar({
  close,
  setClose,
}: Pick<NavbarProps, "close" | "setClose">) {
  const ref = useOutside(setClose);
  const [pos, setPos] = useState<number>(50);

  useEffect(() => {
    setPos(pos);
  }, [pos]);

  return (
    <motion.div
      initial={{ x: -150 }}
      animate={{ x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      ref={ref}
      className={` ${close ? "h-fit lg:w-[200px] " : "h-[500px] w-[300px] max-xl:h-fit z-50 rounded-r-full bg-transparent"} fixed z-50   left-0`}
    >
      {close ? (
        <NavbarShortCut
          close={close}
          setClose={setClose}
          setPos={setPos}
          pos={pos}
        />
      ) : (
        <>
          <DesktopNavbar
            setClose={setClose}
            close={close}
            pos={pos}
            setPos={setPos}
          />
          <MobileNavbar setClose={setClose} setPos={setPos} pos={pos} />
        </>
      )}
    </motion.div>
  );
}
