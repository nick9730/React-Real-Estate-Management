import { ControllerRenderProps, UseFormRegisterReturn } from "react-hook-form";
import { useGetOptionByRole } from "../components/Hooks/useGetOptionByRole";
import { usePropertiesContext } from "../components/Context/PropertiesContext";

export type SelectProps = {
  register?: UseFormRegisterReturn;
  className?: string;
  role: "bed" | "bath" | "type" | "location" | "";
  field?: ControllerRenderProps<
    {
      type: string;
      description: string;
      location: string;
      price: number;
      bed: number;
      bath: number;
      area: number;
      posX: number;
      posY: number;
    },
    "type" | "location"
  >;
};

export default function Select({ register, className, role }: SelectProps) {
  const { data: options } = useGetOptionByRole(role);

  const { CreateParams, beds, baths } = usePropertiesContext();

  const name = role === "bath" ? "Μπάνια" : "Δωμάτια";

  const Bath = baths !== null ? baths : "";

  const Bed = beds !== null ? beds : "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    CreateParams(role === "bath" ? "baths" : "beds", e.target.value);
  };

  return (
    <select
      onChange={(e) => {
        handleChange(e);
      }}
      className={
        !className
          ? `w-[70%] p-4 border-2 border-violet-50 max-lg:w-full rounded-xl bg-input text-black`
          : className
      }
      value={role === "bath" ? Bath : Bed}
    >
      (
      <>
        {options?.map((option) => (
          <option
            {...register}
            className="text-black text-center"
            key={option.id}
            value={option.number ? option.number : "2"}
          >
            {option.number + "  " + name}
          </option>
        ))}
      </>
      )
    </select>
  );
}
