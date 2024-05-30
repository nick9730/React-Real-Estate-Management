import { zodResolver } from "@hookform/resolvers/zod";
import FormRow from "../../ui/FormRow";
import { SubmitHandler, useForm } from "react-hook-form";
import { Caption } from "../../utilities/Caption";

import { FormValuesSettings, settingSchema } from "./setting.schema";
import { useEffect } from "react";
import { useInsertSetting } from "./SettingsHooks/useInsertSetting";
import { SettingsProps } from "./SettingLayout";
import { useUpdateSetting } from "./SettingsHooks/useUpdateOption";
import { useGetOption } from "./SettingsHooks/useGetOption";

export default function SettingsEditForm({
  role,
  setIsOpen,
  setRoleButton,
  setSettings,
}: Pick<
  SettingsProps,
  "role" | "setIsOpen" | "setRoleButton" | "setSettings"
>) {
  const { Insert } = useInsertSetting();
  const { UpdateSetting } = useUpdateSetting();
  const { data: options } = useGetOption();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValuesSettings>({
    resolver: zodResolver(settingSchema),
  });

  const { title } = Caption({ role });

  const OnSubmit: SubmitHandler<FormValuesSettings> = (data) => {
    if (role === "area" || role === "price") {
      let UpdateID = options?.filter((option) => option.role === `${role}`);

      console.log(UpdateID?.at(0)?.id);

      UpdateSetting(
        {
          id: UpdateID?.at(0)?.id,
          role: data.role,
          number: data.number,
        },
        {
          onSuccess: () => {
            setIsOpen(false), setRoleButton("");
          },
        }
      );
    } else {
      Insert(data, {
        onSuccess: () => {
          setIsOpen(false), setRoleButton("");
        },
      });
    }

    setSettings("exist");
  };

  useEffect(() => {
    setValue("role", role);
    if (role === "type" || role === "location") {
      setValue("number", null);
    } else {
      setValue("name", null);
    }
  }, [role]);

  return (
    <form
      onSubmit={handleSubmit(OnSubmit)}
      className="w-full  h-full flex flex-col items-center gap-3 justify-center "
    >
      <input {...register("role")} hidden />
      {role === "type" || role === "location" ? (
        <FormRow
          label={`${title}`}
          input
          placeholder="Πληκτρολογήστε την ονομασία που θα θέλατε"
          register={register("name")}
          type="text"
          role={``}
          errorMessage={errors?.name?.message}
        />
      ) : (
        <FormRow
          label={`${title}`}
          input
          placeholder="Πληκτρολογήστε τον αριθμό που θα θέλατε"
          register={register("number")}
          type="number"
          role={``}
          errorMessage={errors?.number?.message}
        />
      )}

      <div className="flex flex-row-reverse  gap-2">
        <button
          className="p-4 bg-button rounded-xl hover:scale-105  hover:brightness-125"
          onClick={() => {
            setIsOpen(false), setRoleButton("");
            setSettings("exist");
          }}
          type="button"
        >
          Ακύρωση
        </button>
        <button className="p-4 bg-button rounded-xl hover:scale-105  hover:brightness-125">
          Υποβολή
        </button>
      </div>
    </form>
  );
}
