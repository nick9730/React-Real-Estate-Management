import { useState } from "react";
import { MdMap } from "react-icons/md";
import MapLayout from "./GoogleMap";
import Dialog from "./Dialog";

export default function GetDirections() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const OpenMap = () => {
    setIsOpen(true);
  };

  const OnMouseUp = () => {
    setIsOpenDialog(true);
  };

  const OnMouseDown = () => {
    setIsOpenDialog(false);
  };

  return (
    <div className="w-[50px] h-fit flex items-center justify-center absolute right-[-20px]  max-lg:top-3    max-lg:right-7 max-sm:right-3  ">
      <button
        onMouseOver={OnMouseUp}
        type="button"
        onClick={OpenMap}
        onMouseLeave={OnMouseDown}
      >
        <MdMap size={30} color="#019AA4" />
      </button>
      <Dialog isOpenDialog={isOpenDialog} />
      {isOpen && <MapLayout role={"mapLatLng"} setIsOpen={setIsOpen} />}
    </div>
  );
}
