import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner() {
  return (
    <div className="h-full  flex justify-center items-center">
      <ClipLoader
        color={"#461453"}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
