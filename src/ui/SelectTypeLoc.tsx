import { useState } from "react";
import { useGetOptionByRole } from "../components/Hooks/useGetOptionByRole";
import { SelectProps } from "./Select";

export default function SelectTypeLoc({ className, role, field }: SelectProps) {
  const { data: options } = useGetOptionByRole(role);
  const [disabled, setDisabled] = useState<boolean>(false);

  if (options)
    options.forEach(function (item, i) {
      if (item.id === 19 || item.id === 21) {
        options.splice(i, 1);
        options.unshift(item);
      }
    });

  if (options)
    return (
      <select
        className={
          !className
            ? `w-[70%] p-4 border-2 border-violet-50 max-lg:w-full rounded-xl bg-input text-black`
            : className
        }
        onClick={() => {
          setDisabled(true);
        }}
        {...field}
      >
        {options?.map((option) => (
          <option
            className="text-black text-center"
            key={option.id}
            value={option.name ? option.name : ""}
            onChange={(e) => {
              field?.onChange(e.currentTarget.value);
            }}
            disabled={disabled ? option.id === 19 || option.id === 21 : false}
          >
            {option.name}
          </option>
        ))}
      </select>
    );
}
