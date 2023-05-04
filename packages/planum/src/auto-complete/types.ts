import type { TagGroupProps } from '../tag'
import type { SearchInputProps } from './search-input'

export type Value = string | number | null | undefined

export type AutoCompleteProps<T extends object> = SearchInputProps & {
  options: T[]
  selectedKeys?: Value[]
  labelKey: keyof T
  onSelect?: (value: T) => void
}

export type TagItem = string

export type AutoCompleteTagsProps<T extends object> = TagGroupProps<T> &
  AutoCompleteProps<T> & {
    placeholder?: string
    isDisabled?: boolean
    isLoading?: boolean
    status?: 'success' | 'normal' | 'error'
    onSelect?: (selected: T, newItems: T[]) => void
  }
