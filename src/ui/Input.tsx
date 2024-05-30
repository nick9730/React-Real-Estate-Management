import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  placeholder: string | undefined;
  type: string | undefined;
  register?: UseFormRegisterReturn;
  style?: string;
  accept?: string;
  multiple?: boolean;
}

export default function Input({
  placeholder,
  type,
  register,
  accept,
  multiple,
}: InputProps) {
  return (
    <input
      className="w-[70%] p-4 border-2 rounded-xl border-violet-50 max-lg:w-full bg-input text-center text-black focus:text-black  "
      pattern="^[+-]?([0-9]*[.])?[0-9]+$"
      step={0.00000000000000000000000000001}
      placeholder={placeholder}
      type={type}
      {...register}
      accept={accept}
      multiple={multiple}
    />
  );
}
