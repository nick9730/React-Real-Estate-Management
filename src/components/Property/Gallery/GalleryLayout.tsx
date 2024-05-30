import { useState } from "react";

import Gallery from "./Gallery";
import { Images } from "../../../Services/apiImage";
import GalleryThumbnails from "./GalleryThumbnails";

export default function GalleryLayout({ images }: Pick<Images, "images">) {
  const [index, setIndex] = useState<number>(0);
  const [fullsrceen, setFullsreen] = useState<boolean>(true);

  if (images)
    return (
      <>
        <div className="w-full h-full flex flex-row  rounded-md    justify-center  items-center   max-lg:flex-col max-lg:h-full  relative ">
          <Gallery
            index={index}
            setFullsreen={setFullsreen}
            fullsrceen={fullsrceen}
            setIndex={setIndex}
            images={images}
          />

          <GalleryThumbnails
            index={index}
            setIndex={setIndex}
            images={images}
          />
        </div>
      </>
    );
}
