import { MdClose } from "react-icons/md";
import { SettingsProps } from "./SettingLayout";

import { Caption } from "../../utilities/Caption";
import { useDeleteSetting } from "./SettingsHooks/useDeleteSetting";
import { formatCurrency } from "../../utilities/formatCurrency";

export default function SettingsCategories({
  role,
  options,
  settings,
}: Pick<SettingsProps, "role" | "options" | "isOpen" | "settings">) {
  const { title } = Caption({ role });
  const { deleteOptionById } = useDeleteSetting();

  return (
    <div className="w-full flex flex-col justify-center items-center  h-fit p-5    gap-3   ">
      <h2 className=" w-full flex justify-center">{title}</h2>

      <div
        className={
          settings === "exist"
            ? "w-[250px] h-full flex flex-wrap justify-center items-center   gap-3"
            : "w-full h-full flex flex-wrap justify-center items-center   gap-3 "
        }
      >
        {options?.map(
          (setting) =>
            role === setting.role &&
            setting.id !== 19 &&
            setting.id !== 21 && (
              <div
                key={setting.id}
                className="basis-[100px] h-fit flex flex-col items-center justify-center rounded-lg bg-slate-100 p-2 hover:bg-navbar relative"
              >
                <button
                  className={`w-[90px]  p-4 h-full flex flex-col items-center justify-center    text-black rounded-lg text-sm `}
                >
                  {role === "bath" ||
                  role === "bed" ||
                  role === "area" ||
                  role === "price"
                    ? setting.number
                      ? role === "price"
                        ? formatCurrency(setting?.number) + '€'
                        : setting.number 
                      : setting.number
                    : setting.name}
                </button>
                {role === "price" || role === "area" ? (
                  ""
                ) : (
                  <button
                    onClick={() => {
                      deleteOptionById(setting.id ?? 1);
                    }}
                    className=" text-xl absolute top-0 right-0 rounded-l-full bg-red-950 w-[30px] h-[25px]  flex justify-center items-center"
                  >
                    <MdClose color="white" />
                  </button>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
