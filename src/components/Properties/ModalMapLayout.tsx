import Button from "../../ui/Button";
import GoogleMap from "../Map/GoogleMap";

interface ModalMapLayout {
  setRoleButton: React.Dispatch<
    React.SetStateAction<"openMap" | "openListing">
  >;
  roleButton: "openListing" | "openMap";
  mobileOpenMap: boolean;
  setMobileOpenMap: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalMapLayout({
  setRoleButton,
  mobileOpenMap,
  setMobileOpenMap,
  roleButton,
}: ModalMapLayout) {
  return (
    <div className="w-full  h-full flex-row items-center justify-center z-50 fixed  ">
      <GoogleMap role="modalMap" />
      <div className="w-full flex justify-center">
        <Button
          roleButton={roleButton}
          setValue={setMobileOpenMap}
          value={mobileOpenMap}
          onClick={() => setRoleButton("openMap")}
        />
      </div>
    </div>
  );
}
