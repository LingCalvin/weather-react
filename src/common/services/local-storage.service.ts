/**
 * Calls `localStorage.setItem()` with `key` and the result of calling
 * `JSON.stringify()` with `value` for `value`.
 */
function setItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Calls `localStorage.getItem()` with `key`. If the result is `null`, it gets
 * returned. Otherwise, the result of calling `JSON.parse()` with the value is
 * returned.
 */
function getItem(
  key: string,
  reviver?: (this: any, key: string, value: any) => any
): any | null {
  const value = localStorage.getItem(key);
  if (value === null) {
    return null;
  }
  return JSON.parse(value, reviver);
}

/**
 * Provides convenience wrappers for functions of `localStorage`.
 */
const localStorageService = {
  setItem,
  getItem,
};

export default localStorageService;
