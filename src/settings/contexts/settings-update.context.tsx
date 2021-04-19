import { createContext } from "react";
import Settings from "../interfaces/settings";

/** Context for passing a callback to update settings. */
export const SettingsUpdateContext = createContext<
  (update: Partial<Settings>) => void
>(() => {});
