export type KeyofUnion<T> = T extends T ? keyof T : never;
