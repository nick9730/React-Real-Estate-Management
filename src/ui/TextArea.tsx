import { UseFormRegisterReturn } from "react-hook-form";

type TextAreaProps = {
  register?: UseFormRegisterReturn;
};

export default function TextArea({ register }: TextAreaProps) {
  return (
    <div className="w-[85%] h-full flex justify-start items-center max-xl:w-[100%]">
      <textarea
        {...register}
        className="w-full h-[9rem] p-2 border-2 rounded-xl border-violet-50 bg-input text-black"
        placeholder="Δώστε λίγα λόγια για το ακίνητο"
      ></textarea>
    </div>
  );
}
