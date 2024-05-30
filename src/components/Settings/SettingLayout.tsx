import { useState } from "react";
import { OptionProps } from "../../Services/apiOption";
import Spinner from "../../ui/Spinner";
import { useGetOption } from "./SettingsHooks/useGetOption";
import SettingView from "./SettingView";
import SettingNavbar from "./SettingNavbar";

export type SettingsProps = {
  options: OptionProps[] | undefined | null;
  role: "location" | "price" | "type" | "bath" | "bed" | "area" | "";
  isOpen: boolean;
  roleButton: "location" | "price" | "type" | "bath" | "bed" | "area" | "";
  setRoleButton: React.Dispatch<
    React.SetStateAction<
      "location" | "price" | "type" | "bath" | "bed" | "area" | ""
    >
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSettings: React.Dispatch<React.SetStateAction<"form" | "exist">>;
  settings: "form" | "exist";
};

export default function SettingLayout() {
  const { data, isLoading } = useGetOption();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [roleButton, setRoleButton] = useState<
    "location" | "price" | "type" | "bath" | "bed" | "area" | ""
  >("");

  const [settings, setSettings] = useState<"form" | "exist">("exist");

  if (isLoading) return <Spinner />;
  return (
    <div className="w-fit h-fit  flex flex-col justify-start items-start max-lg:justify-center  gap-3  max-lg:overflow-y-scroll max-xl:w-full p-7 max-lg:p-1 rounded-xl shadow-xl shadow-navbar bg-white ">
      <h1 className="max-lg:text-2xl border-b-2 w-full flex justify-center p-2 border-slate-100">
        Κατασκευή Φίλτρων
      </h1>
      <div className="w-full flex justify-start items-start max-lg:flex-col max-lg:gap-2 ">
        <SettingNavbar
          setIsOpen={setIsOpen}
          setRoleButton={setRoleButton}
          roleButton={roleButton}
          setSettings={setSettings}
          settings={settings}
        />
        <SettingView
          options={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setRoleButton={setRoleButton}
          roleButton={roleButton}
          setSettings={setSettings}
          settings={settings}
        />
      </div>
    </div>
  );
}
