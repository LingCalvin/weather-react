import { useEffect, useRef, useState } from "react";

export default function useDebouncedValue<T>(value: T, timeout: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const lastFired = useRef(Date.now());

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebouncedValue(value);
      lastFired.current = Date.now();
    }, timeout - (Date.now() - lastFired.current));
    return () => clearTimeout(handle);
  }, [value, timeout]);

  return debouncedValue;
}
