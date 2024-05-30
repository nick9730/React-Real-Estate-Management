import { useEffect } from "react";

export const useDetectWidth = (
  setValue: React.Dispatch<React.SetStateAction<number>>
) => {
  const DetectWidth = () => {
    setValue(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", DetectWidth);

    return () => {
      window.removeEventListener("resize", DetectWidth);
    };
  });
};
