import { useEffect } from "react";
import localStorageService from "../services/local-storage.service";

/**
 * Writes a value to localStorage whenever the value changes.
 *
 * @param key - The key in localStorage to use
 * @param value - The value to store in localStorage
 */
export default function useSerializeValue(key: string, value: any) {
  useEffect(() => {
    localStorageService.setItem(key, value);
  }, [key, value]);
}
