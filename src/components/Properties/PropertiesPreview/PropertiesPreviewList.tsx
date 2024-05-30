import { useEffect } from "react";
import PropertiesPreviewItem from "./PropertiesPreviewItem";
import { useGetAllProperties } from "../PropertiesHooks/useGetAllProperties";
import { useInView } from "react-intersection-observer";
import { data } from "../properties.types";
import Spinner from "../../../ui/Spinner";
import NotFoundResults from "../../../ui/NotFoundResults";

export default function PropertiesPreviewList() {
  const { estates, fetchNextPage, isFetchingNextPage, isPending } =
    useGetAllProperties();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isPending) return <Spinner />;

  if (estates?.pages[0].data.length === 0) return <NotFoundResults />;

  return (
    <div className="w-full h-full  flex flex-col   gap-6  items-center  justify-center overflow-y-scroll ">
      <div className="w-full h-full  flex flex-wrap   gap-6  items-center  justify-center  ">
        {estates?.pages.map((page) => {
          return page.data.map((property: data) => {
            return (
              <ul
                className="basis-[35%] h-[355px] bg-white flex justify-center  rounded-xl hover:scale-105 max-lg:scale-x-90"
                key={property.id}
              >
                <PropertiesPreviewItem property={property} />
              </ul>
            );
          });
        })}
        <div className="w-full h-10" ref={ref}>
          {isFetchingNextPage && <Spinner />}
        </div>
      </div>
    </div>
  );
}
