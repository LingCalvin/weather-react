import { KeyofUnion } from "../types/KeyofUnion";

/**
 * Returns an object with remapped keys.
 *
 * @param object - The object whose keys are to be remapped
 * @param map - The old to new key mapping
 * @returns A new object with the keys remapped based on `map`
 */
export function remapKeys<T, U>(
  object: T,
  map: Map<KeyofUnion<T>, KeyofUnion<U>>
): U {
  const remappedObject: any = { ...object };
  map.forEach((newKey, oldKey) => {
    if (
      (oldKey as string) !== (newKey as string) &&
      remappedObject.hasOwnProperty(oldKey)
    ) {
      remappedObject[newKey] = remappedObject[oldKey];
      delete remappedObject[oldKey];
    }
  });
  return remappedObject;
}
