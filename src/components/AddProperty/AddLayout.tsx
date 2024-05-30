import AddEditForm from "./AddEditForm";

export default function AddLayout() {
  return (
    <div className="w-[90%] h-full max-2xl:w-full    p-2 max-lg:w-full   overflow-y-scroll scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-navbar  flex justify-center lg:items-center   ">
      <AddEditForm />
    </div>
  );
}
