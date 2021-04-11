import { useEffect, useState } from "react";

/**
 * Returns the browser's online status.
 */
export default function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    function setOffline() {
      setIsOnline(false);
    }
    function setOnline() {
      setIsOnline(true);
    }
    window.addEventListener("offline", setOffline);
    window.addEventListener("online", setOnline);

    return () => {
      window.removeEventListener("offline", setOffline);
      window.removeEventListener("online", setOnline);
    };
  }, []);

  return isOnline;
}
