export default function PropertyDescription({
  description,
}: {
  description: string | null;
}) {
  return (
    <div className="w-full h-fit   p-2">
      <h2 className="font-thin border-b-2   border-slate-300 w-full h-fit p-2 ">
        Περιγραφή
      </h2>
      <p className="p-2">{description}</p>
    </div>
  );
}
