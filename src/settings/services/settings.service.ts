import localStorageService from "../../common/services/localStorage.service";
/**
 * Returns a key for loading and saving preferences.
 *
 * @param key - The key.
 * @returns The key to be used when saving and loading preferences.
 */
function generateKey(key: string): string {
  return `userPreferences::${key}`;
}

/**
 * Service for saving and loading settings.
 */
export class SettingsService {
  /**
   * Saves a setting.
   *
   * @param key - The key for the setting.
   * @param value - The setting to save.
   */
  save<T>(key: string, value: T) {
    localStorageService.setItem(generateKey(key), value);
  }
  /**
   * Loads a setting.
   *
   * @param key - The key for the setting.
   * @param defaultValue - The default value to use if `key` is not found.
   * @returns The setting or null if it is not found.
   */
  load<T>(key: string, defaultValue?: T): T | null {
    return (
      localStorageService.getItem(generateKey(key)) ?? defaultValue ?? null
    );
  }
}

const settingsService = new SettingsService();
export default settingsService;
