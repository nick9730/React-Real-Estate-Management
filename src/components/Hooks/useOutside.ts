import { useEffect, useRef } from "react";

export function useOutside(
  handler: React.Dispatch<React.SetStateAction<boolean>>,
  listenCapturing = true
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handler(true);
        }
      }

      document.addEventListener(
        "click",
        (e: MouseEvent) => handleClick(e),
        listenCapturing
      );

      return () =>
        document.removeEventListener(
          "click",
          (e: MouseEvent) => handleClick(e),
          listenCapturing
        );
    },
    [handler, listenCapturing]
  );

  return ref;
}
