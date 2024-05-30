interface FilterTitleProps {
  children: React.ReactNode;
}

export default function FilterTitle({ children }: FilterTitleProps) {
  return (
    <div className=" text-2xl h-[22px]  max-xl:text-xl text-black">
      {children}
    </div>
  );
}
