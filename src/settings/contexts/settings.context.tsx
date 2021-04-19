import { createContext } from "react";
import { defaultSettings } from "../constants/default-settings";
import Settings from "../interfaces/settings";

/** Context for user settings. */
export const SettingsContext = createContext<Settings>(defaultSettings);
