import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenToCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenToCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenToCapturing);
  }, [handler, listenToCapturing]);

  return ref;
}
