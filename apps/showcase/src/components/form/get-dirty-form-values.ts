type UnknownArrayOrObject = unknown[] | Record<string, unknown> | object

export default function getDirtyFormValues(
  dirtyFields: UnknownArrayOrObject | boolean,
  allValues: UnknownArrayOrObject,
): UnknownArrayOrObject {
  // If *any* item in an array was modified, the entire array must be submitted
  if (dirtyFields === true || Array.isArray(dirtyFields)) {
    return allValues
  }

  // Here, we have an object.
  return Object.fromEntries(
    Object.keys(dirtyFields).map((key) => [
      key,
      // @ts-expect-error
      getDirtyFormValues(dirtyFields[key], allValues[key]),
    ]),
  )
}
