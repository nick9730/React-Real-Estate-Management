import ExistedFilter from "./ExistedFilter";
import { SettingsProps } from "./SettingLayout";
import SettingsCategories from "./SettingsCategories";
import SettingsEditForm from "./SettingsEditForm";

export default function SettingView({
  isOpen,
  options,
  setIsOpen,
  setRoleButton,
  roleButton,
  settings,
  setSettings,
}: Pick<
  SettingsProps,
  | "isOpen"
  | "options"
  | "roleButton"
  | "setRoleButton"
  | "setIsOpen"
  | "setSettings"
  | "settings"
>) {
  return (
    <div className="w-[1000px] flex  gap-3 max-lg:w-full justify-center">
      {isOpen ? (
        <div className="w-[80%] h-fit flex flex-col-reverse items-center justify-center bg-white rounded-xl shadow-lg shadow-navbar p-2 gap-2 max-lg:w-full">
          <SettingsEditForm
            role={roleButton}
            setIsOpen={setIsOpen}
            setRoleButton={setRoleButton}
            setSettings={setSettings}
          />
          <SettingsCategories
            options={options}
            role={roleButton}
            isOpen
            settings={settings}
          />
        </div>
      ) : (
        <ExistedFilter
          options={options}
          isOpen={isOpen}
          role="area"
          settings={settings}
        />
      )}
    </div>
  );
}
