import { NavLink } from "react-router-dom";
import { usePropertiesContext } from "../components/Context/PropertiesContext";

type StyleNavLinkProps = {
  to: string;
  children: React.ReactNode;
  role: "mobile" | "desktop";
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  style?: React.CSSProperties;
};

export default function StyledNavlink({
  children,
  to,
  role,
  onClick,
  style,
}: StyleNavLinkProps) {
  const { setIsEditing } = usePropertiesContext();

  return (
    <NavLink
      onClick={() => {
        onClick(true), setIsEditing("add");
      }}
      className={`   ${
        role === "desktop"
          ? "w-[205px] shadow-navbarbuttons shadow-md p-2  rounded-full text-2xl text-links flex justify-center items-center gap-1 hover:text-form "
          : "w-full h-full flex flex-row  items-center justify-start "
      }   `}
      to={to}
      style={style}
    >
      {children}
    </NavLink>
  );
}
