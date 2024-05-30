import { BiLogOut, BiPlus, BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";
import StyledNavlink from "../../ui/StyledNavlink";
import Logo from "./Logo";
import { NavbarProps } from "./Navbar";
import { MdClose } from "react-icons/md";
import { logout } from "../../Services/apiUser";
import { useNavigate } from "react-router-dom";

export default function DesktopNavbar({ close, setClose, pos }: NavbarProps) {
  const navigate = useNavigate();

  let y;

  if (pos > 0 && pos < 400) {
    y = pos;
  }

  if (pos < 0) {
    y = pos + 50;
  }
  if (pos < -95) {
    y = 20;
  }
  if (pos > 401) {
    y = pos - 400;
  }
  if (pos > 800) {
    y = 400;
  }

  return (
    <motion.div
      initial={{ x: -150 }}
      animate={{ x: 0 }}
      exit={{ opacity: 0 }}
      dragElastic={0}
      transition={{ duration: 1 }}
      dragConstraints={{ top: 0, bottom: window.innerHeight - 100 }}
      style={{ y: y }}
      className={`w-[300px] h-full bg-navbar   max-xl:hidden   absolute  left-0  flex flex-col justify-center gap-2 items-center rounded-r-full  p-3   text-white z-0`}
    >
      <div className="w-full h-full flex  flex-col items-start justify-end gap-3 max-xl:hidden">
        <Logo />
        <div className="w-full h-full flex flex-col items-start justify-center gap-3">
          <StyledNavlink onClick={setClose} role="desktop" to={"/home"}>
            <BiSearch size={30} />
            Αναζήτηση
          </StyledNavlink>
          <StyledNavlink onClick={setClose} role="desktop" to={"/addProperty"}>
            <BiPlus size={30} />
            Προσθήκη
          </StyledNavlink>

          <StyledNavlink onClick={setClose} role="desktop" to={"/settings"}>
            <FiSettings size={30} />
            Ρυθμίσεις
          </StyledNavlink>
        </div>
        <div className="w-full flex gap-3">
          <button
            className="shadow-navbarbuttons shadow-md p-1   text-md rounded-2xl w-fit  "
            onClick={() => setClose(!close)}
          >
            <MdClose size={30} />
          </button>
          <button
            className="shadow-navbarbuttons shadow-md p-1   text-md rounded-2xl w-fit  "
            onClick={() => {
              navigate("/login"), logout;
            }}
          >
            <BiLogOut size={30} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
