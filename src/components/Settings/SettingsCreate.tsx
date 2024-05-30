import { SettingsProps } from "./SettingLayout";
import SettingsButtonsOpenForm from "./SettingsButtonsOpenForm";

type rolesProps = {
  id: number;
  role: "type" | "location" | "bath" | "bed" | "area" | "price";
}[];

const roles: rolesProps = [
  {
    id: 1,
    role: "type",
  },
  {
    id: 2,
    role: "location",
  },
  {
    id: 3,
    role: "bath",
  },
  {
    id: 4,
    role: "bed",
  },
  {
    id: 5,
    role: "area",
  },
  {
    id: 6,
    role: "price",
  },
];

export default function SettingsCreate({
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
    <div className="w-fit h-fit flex flex-col gap-3 justify-center bg-navbar p-6 rounded-xl max-lg:grid max-lg:grid-cols-2">
      {roles.map((role) => (
        <SettingsButtonsOpenForm
          setSettings={setSettings}
          settings={settings}
          role={role.role}
          setIsOpen={setIsOpen}
          setRoleButton={setRoleButton}
          roleButton={roleButton}
        />
      ))}
    </div>
  );
}
