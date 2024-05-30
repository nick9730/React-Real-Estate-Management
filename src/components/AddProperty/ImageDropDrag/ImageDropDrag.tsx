import { useDropzone } from "react-dropzone";
import Thumbnails from "./Thumbnails";

type ImageDropDragProps = {
  setFiles: React.Dispatch<React.SetStateAction<File[] | null | undefined>>;
  files: File[] | null | undefined;
};

export default function ImageDropDrag({ setFiles, files }: ImageDropDragProps) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  function DeleteFiles(name: string | undefined) {
    setFiles(files?.filter((file) => file?.name !== name));
  }

  return (
    <div className="w-full h-fit flex flex-row gap-3 items-center justify-center  max-xl:p-6  flex-wrap max-xl:h-fit">
      <div
        {...getRootProps()}
        className="text-blue-400 border-2 border-dashed  max-xl:w-[100%] w-[80%] h-[300px] flex  justify-center items-center p-2 z-0 gap-6 border-blue-400 max-xl:h-[200px]"
      >
        <input {...getInputProps()} />
        <div className="w-full flex flex-col items-center justify-center">
          <img className="w-[9rem] h-15" src={"/R.png"} />

          <p className="text-xl">Σύρτε τις εικόνες που θέλετε να ανεβάσετε</p>
        </div>
      </div>
      {files?.length !== 0 && files ? (
        <div className="w-full h-full flex flex-row justify-center items-center">
          <Thumbnails images={files} DeleteFiles={DeleteFiles} />
        </div>
      ) : null}
    </div>
  );
}
