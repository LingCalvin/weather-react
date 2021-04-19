import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardPage from "./dashboard/pages/dashboard.page";
import SettingsPage from "./settings/pages/settings.page";
import routes from "./common/constants/routes.json";
import { SettingsContext } from "./settings/contexts/settings.context";
import { useReducer } from "react";
import { settingsReducer } from "./settings/reducers/settings.reducer";
import { SettingsUpdateContext } from "./settings/contexts/settings-update.context";
import settingsService from "./settings/services/settings.service";
import Settings from "./settings/interfaces/settings";

export default function App() {
  const [settingsState, settingsDispatch] = useReducer(
    settingsReducer,
    settingsService.loadAllOrDefault()
  );

  return (
    <SettingsContext.Provider value={settingsState}>
      <SettingsUpdateContext.Provider
        value={(update) => {
          Object.keys(update).forEach((key) => {
            settingsService.save(key, update[key as keyof Settings]);
          });
          settingsDispatch({ type: "update", update });
        }}
      >
        <div className="App">
          <HashRouter>
            <Switch>
              <Route path={routes.DASHBOARD} exact>
                <DashboardPage />
              </Route>
              <Route path={routes.SETTINGS}>
                <SettingsPage />
              </Route>
            </Switch>
          </HashRouter>
        </div>
      </SettingsUpdateContext.Provider>
    </SettingsContext.Provider>
  );
}
