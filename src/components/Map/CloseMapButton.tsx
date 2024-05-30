import { MdClose } from "react-icons/md";

export default function CloseMapButton({
  setIsOpen,
  role,
}: {
  role: "map" | "mapLatLng" | "modalMap";
  setIsOpen: any;
}) {
  return (
    <>
      {" "}
      {role === "mapLatLng" && (
        <button
          className="absolute top-0 right-9"
          onClick={() => {
            setIsOpen && setIsOpen(false);
          }}
        >
          <MdClose size={50} color="black" />
        </button>
      )}
    </>
  );
}
