export interface ButtonsProps {
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
  roleButton: "openListing" | "openMap";
  onClick: () => void;
}

export default function Button({
  setValue,
  value,
  roleButton,
  onClick,
}: ButtonsProps) {
  const handleClick = () => {
    if (roleButton === "openMap") {
      setValue(!value);
      onClick();
    } else {
      setValue(false);
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-3 z-30 p-3 rounded-lg bg-button text-white "
    >
      {roleButton === "openListing" ? "Ακίνητα" : "Χάρτης"}
    </button>
  );
}
