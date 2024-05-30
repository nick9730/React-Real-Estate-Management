import { SettingsProps } from "./SettingLayout";
import SettingsCategories from "./SettingsCategories";

export default function ExistedFilter({
  options,
  isOpen,
  settings,
}: Pick<SettingsProps, "options" | "isOpen" | "role" | "settings">) {
  return (
    <div className="w-full flex flex-col items-center justify-center max-lg:hidden">
      <div className="w-full h-fit  grid grid-cols-3    max-xl:w-full max-lg:grid-cols-2 max-sm:grid-cols-1  max-lg:w-full place-content-center place-items-start ">
        <SettingsCategories
          options={options}
          role={"bath"}
          isOpen={isOpen}
          settings={settings}
        />
        <SettingsCategories
          options={options}
          role={"bed"}
          isOpen={isOpen}
          settings={settings}
        />
        <SettingsCategories
          options={options}
          role={"location"}
          isOpen={isOpen}
          settings={settings}
        />
        <SettingsCategories
          options={options}
          role={"type"}
          isOpen={isOpen}
          settings={settings}
        />
        <SettingsCategories
          options={options}
          role={"price"}
          isOpen={isOpen}
          settings={settings}
        />
        <SettingsCategories
          options={options}
          role={"area"}
          isOpen={isOpen}
          settings={settings}
        />
      </div>
    </div>
  );
}
