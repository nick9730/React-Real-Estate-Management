import AddEditForm from "../AddProperty/AddEditForm";

import { useGetEstateByID } from "./PropertyHooks/useGetEstateByID";
import { useGetImagesByID } from "./PropertyHooks/useGetImageByID";
import PropertyImages from "./PropertyImages";
import PropertyInformation from "./PropertyInformation";

export default function PropertyLayout() {
  const { data: estate } = useGetEstateByID();

  const id = estate !== null && estate ? estate[0]?.id_image : 1;
  const { data: images, isLoading } = useGetImagesByID(id);

  if (estate)
    return (
      <>
        <div className="w-[80%] h-full  flex flex-col  relative  max-2xl:w-full overflow-scroll scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-navbar  ">
          <div className="w-full h-fit flex flex-col items-center justify-start  lg:p-3 gap-4 max-lg:w-full bg-transparent  ">
            <PropertyImages images={images} isLoading={isLoading} />
            <PropertyInformation estate={estate[0]} />
          </div>
          <div className="  w-full h-full p-1  relative flex justify-center">
            <AddEditForm estate={estate[0]} />
          </div>
        </div>
      </>
    );
}
