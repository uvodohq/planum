import { useControllableValue } from '../hooks'

export type ID = string | number | null | undefined

export type Item<T extends object> = {
  id: ID
} & T

type KeysWithValuesOfType<T, V> = keyof {
  [P in keyof T as T[P] extends V ? P : never]: P
}

export interface UseTagListProps<T extends object> {
  value?: Item<T>[]
  defaultValue?: Item<T>[]
  onChange?: (value: Item<T>[]) => void
  isDisabled?: boolean
  /**
   * @description
   *
   * with labelKey - tags show which label text needs to be rendered in the tag text
   * items[selectedIndex][labelKey]
   *
   * get only keys which values is string from Item<T>
   */
  labelKey: KeysWithValuesOfType<Item<T>, ID>
  onTagRemoved?: (args: {
    item: Item<T>
    items: Item<T>[]
    index: number
  }) => void
}

export function useTagList<T extends object>(props: UseTagListProps<T>) {
  const {
    labelKey,
    defaultValue = [],
    onTagRemoved,
    isDisabled,
    ...rest
  } = props

  const [tags, setTags] = useControllableValue(rest, {
    defaultValue,
  })

  function removeTag(removedTag: Item<T>, index: number) {
    if (isDisabled) return

    setTags((prev) => {
      const newTags = [...prev]
      newTags.splice(index, 1)
      onTagRemoved?.({
        item: removedTag,
        items: newTags,
        index,
      })
      return newTags
    })
  }

  return {
    tags,
    removeTag,
    labelKey,
  }
}

class Helper<T extends object> {
  // @ts-expect-error generic return type
  Return = useTagList<T>({})
}

export type TagListState<T extends object> = Helper<T>['Return']
