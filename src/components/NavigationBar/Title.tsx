export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[100%] p-2 max-lg:w-[95%]  flex justify-center  items-start  max-lg:justify-center border-b-2">
      <h1 className="w-full flex justify-center max-lg:text-2xl text-black font-thin text-4xl">
        {children}
      </h1>
    </div>
  );
}
