export default function Logo() {
  return (
    <div className="w-[70%] h-[400px] flex flex-col justify-end items-center  max-lg:hidden  ">
      <img src="/image.webp" className="w-[10rem] h-[8rem] rounded-full"></img>

      <div className="w-full  flex justify-center items-center">
        <h2 className="text-links w-[250px] font-serif font-bold text-center ">
          {" "}
          Real Estate Management
        </h2>
      </div>
    </div>
  );
}
