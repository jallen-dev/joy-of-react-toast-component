import { useEffect } from "react";

export default function useEscapeKey(cb) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        cb();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cb]);
}
