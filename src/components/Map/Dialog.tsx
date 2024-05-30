import { BsExclamation } from "react-icons/bs";

export default function Dialog({ isOpenDialog }: { isOpenDialog: boolean }) {
  return (
    <dialog
      open={isOpenDialog}
      className="text-white w-[240px] bg-button z-50 top-10 left-0  text-sm text-center shadow-sm shadow-black rounded-xl p-1 max-lg:hidden"
    >
      <div className="w-[260px] h-[40px] flex items-center justify-start gap-3  ">
        <span className="w-5">
          <BsExclamation size={40} color="#461453" />
        </span>
        <p className="w-[200px]">
          Πατήστε εδώ για να βάλετε τις συντεταγμένες που επιθυμείτε
        </p>
      </div>
    </dialog>
  );
}
