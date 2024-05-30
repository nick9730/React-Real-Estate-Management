import React from "react";

interface LabelProps {
  children: React.ReactNode;
  latLng?: boolean | undefined;
}

export default function Label({ children, latLng }: LabelProps) {
  return (
    <label
      className={
        latLng
          ? `w-[70%] h-[35px] max-lg:hidden  text-black font-thin text-2xl flex justify-center gap-2 ml-2`
          : `w-[300px] h-[35px] max-lg:hidden  text-black font-thin text-2xl flex justify-center gap-2`
      }
    >
      {children}
    </label>
  );
}
