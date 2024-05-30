import { Caption } from "../../utilities/Caption";
import { usePropertiesContext } from "../Context/PropertiesContext";
import { SettingsProps } from "./SettingLayout";

export default function SettingsButtonsOpenForm({
  role,
  setIsOpen,
  setRoleButton,
  roleButton,
  setSettings,
}: Pick<
  SettingsProps,
  | "setIsOpen"
  | "role"
  | "setRoleButton"
  | "roleButton"
  | "setSettings"
  | "settings"
>) {
  const { width } = usePropertiesContext();
  const { title, mobileTitle } = Caption({ role });

  const active = role === roleButton;

  return (
    <div
      className={` h-[50px] flex flex-col items-center justify-center rounded-lg  text-lg ${active ? "bg-button text-white" : "bg-white "} p-2 hover:bg-button relative `}
    >
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
          setRoleButton(role);
          setSettings("form");
        }}
        className={`w-[200px]  p-4 h-[50px] flex flex-col items-center justify-center  max-sm:text-[12px]    rounded-lg `}
      >
        {width < 1024 ? mobileTitle : title}
      </button>
    </div>
  );
}
