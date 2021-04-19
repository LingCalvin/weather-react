import Settings from "../interfaces/settings";

export type Action = { type: "update"; update: Partial<Settings> };

export function settingsReducer(state: Settings, action: Action): Settings {
  const { type, update } = action;
  switch (type) {
    case "update":
      return { ...state, ...update };
  }
}
