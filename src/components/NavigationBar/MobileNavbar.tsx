import { BiLogOut, BiPlus, BiSearch } from "react-icons/bi";
import StyledNavlink from "../../ui/StyledNavlink";
import { FiSettings } from "react-icons/fi";
import { NavbarProps } from "./Navbar";

import { motion } from "framer-motion";
import { logout } from "../../Services/apiUser";
import { useNavigate } from "react-router-dom";

export default function MobileNavbar({
  setClose,
  pos,
}: Omit<NavbarProps, "close">) {
  const navigate = useNavigate();

  let y;

  if (pos > 0 && pos < 400 && window.innerWidth < 1024) {
    y = pos;
  }

  if (pos < 0 && window.innerWidth < 1024) {
    y = pos + 200;
  }

  if (pos > 400 && window.innerWidth < 1024) {
    y = pos - 130;
  }
  if (pos > 800 && window.innerWidth < 1024) {
    y = 650;
  }
  return (
    <motion.div
      initial={{ x: -150 }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      dragElastic={0}
      transition={{ duration: 1 }}
      style={{ y: y }}
      dragConstraints={{ top: 10, bottom: window.innerHeight - 500 }}
      className={`w-24 h-[300px] z-30  fixed xl:hidden flex flex-col   shadowr-2xl shadow-white bg-navbar    rounded-bl-3xl rounded-tl-3xl items-center rounded-full  p-3 gap-2 shadow-red-300xl text-white`}
    >
      <StyledNavlink onClick={setClose} role="mobile" to={"/home"}>
        <BiSearch size={40} />
      </StyledNavlink>
      <StyledNavlink
        onClick={setClose}
        role="mobile"
        to={"/addProperty"}
        style={{ justifyContent: "end " }}
      >
        <BiPlus size={40} />
      </StyledNavlink>

      <StyledNavlink
        style={{ justifyContent: "end " }}
        onClick={setClose}
        role="mobile"
        to={"/settings"}
      >
        <FiSettings size={40} />
      </StyledNavlink>
      <StyledNavlink
        onClick={() => {
          navigate("/login"), logout;
        }}
        role="mobile"
        to={"/login"}
      >
        <BiLogOut size={30} />
      </StyledNavlink>
    </motion.div>
  );
}
