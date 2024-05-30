import { ReactNode } from "react";

type LiProps = {
  icon: ReactNode;
  text?: string;
  children: React.ReactNode;
  details?: boolean;
  sqrt?: boolean;
};

export default function Li({ icon, text, children, details, sqrt }: LiProps) {
  return (
    <li
      className={
        details
          ? `w-full h-[70px] font-[Roboto] flex justify-center items-center  gap-2 text-2xl max-lg:text-xl`
          : `w-[90px] h-[20px] flex items-center justify-center  gap-1 text-[12px] `
      }
    >
      {!details ? (
        <>
          {icon}
          {children}
          {"    "}
          {text}
        </>
      ) : (
        <>
          {sqrt || <div className=" h-full flex items-center">{icon}</div>}
          {children}
          {sqrt && <div className=" h-full flex items-center">{icon}</div>}

          <div className="">{text}</div>
        </>
      )}
    </li>
  );
}
