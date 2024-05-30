import { Outlet } from "react-router-dom";
import Navbar from "../components/NavigationBar/Navbar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Applayout() {
  const [close, setClose] = useState<boolean>(true);

  return (
    <AnimatePresence initial={true} mode="wait">
      <div className="w-screen h-screen   overflow-hidden   bg-slate-200">
        <Navbar close={close} setClose={setClose} />
        <main className="w-[100%] h-full flex flex-col justify-center items-center     ">
          <Outlet />
        </main>
      </div>
    </AnimatePresence>
  );
}
