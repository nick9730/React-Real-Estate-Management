import { UseFormRegisterReturn } from "react-hook-form";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import MapButton from "../components/Map/GetDirections";

import { FaCircleExclamation } from "react-icons/fa6";

type FormRowProps = {
  children?: React.ReactNode;
  label: string;
  placeholder?: string;
  type?: string;
  register?: UseFormRegisterReturn;
  style?: string;
  select?: boolean;
  input?: boolean;
  textarea?: boolean;
  accept?: string;
  errorMessage?: string;
  multiple?: boolean;
  role: "type" | "bed" | "bath" | "location" | "";
  latLng?: boolean;
};

export default function FormRow({
  label,
  placeholder,
  register,
  type,
  select,
  textarea,
  input,
  accept,
  errorMessage,
  multiple,
  role,
  latLng,
}: FormRowProps) {
  return (
    <div
      className={
        latLng
          ? `w-full h-fit  flex flex-col max-lg:items-start max-lg:justify-start text-white items-center   gap-1`
          : `w-full h-fit  flex flex-col max-lg:items-start max-lg:justify-start text-white items-center  justify-start gap-1`
      }
    >
      <Label latLng={latLng}>{label}</Label>
      {textarea && <TextArea register={register} />}
      {select ? <Select role={role} /> : ""}
      {input && (
        <div className="w-full flex flex-row-reverse items-center justify-center lg:relative  ">
          <div className="w-full flex flex-col items-center justify-center">
            <Input
              type={type}
              placeholder={placeholder}
              register={register}
              accept={accept}
              multiple={multiple}
            />
            {latLng && <MapButton />}
            {errorMessage && (
              <p className="w-fit text-sm  h-fit  text-red-900 flex items-center justify-center gap-1">
                {" "}
                <FaCircleExclamation size={15} />
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
