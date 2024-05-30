import { SettingsProps } from "./SettingLayout";
import SettingsCreate from "./SettingsCreate";

export default function SettingNavbar({
  setIsOpen,
  setRoleButton,
  roleButton,
  setSettings,
  settings,
}: Pick<
  SettingsProps,
  "setIsOpen" | "setRoleButton" | "roleButton" | "setSettings" | "settings"
>) {
  return (
    <div className="w-[30%] h-full  flex flex-col justify-start items-start  max-lg:items-center max-lg:justify-center gap-5  max-lg:w-full  ">
      <SettingsCreate
        setIsOpen={setIsOpen}
        setRoleButton={setRoleButton}
        roleButton={roleButton}
        setSettings={setSettings}
        settings={settings}
      />
    </div>
  );
}
