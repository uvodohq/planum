import { forwardRef } from 'react'

import { Spacer } from '../layout'
import type { TagGroupProps } from '../tag/tag-group'
import { TagGroup } from '../tag/tag-group'
import type { Item } from '../tag/use-tag-list'
import { generateId } from './generate-id'
import { TagSelectInput } from './tag-select-input'

export type TagItem = string

export interface TagSelectProps<T extends object> extends TagGroupProps<T> {
  placeholder?: string
  isDisabled?: boolean
  isLoading?: boolean
  status?: 'success' | 'normal' | 'error'
}

function _TagSelect<T extends object>(
  props: TagSelectProps<T>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const {
    defaultValue = [],
    value = defaultValue,
    onChange,
    labelKey,
    onTagRemoved,
    renderTag,
    ...rest
  } = props

  function onSubmit(name: string) {
    const isDuplicate = value.some(
      (item) =>
        // @ts-expect-error TODO: fix this
        String(item[labelKey]).toLocaleLowerCase() ===
        String(name).toLocaleLowerCase(),
    )
    if (isDuplicate) return null

    const newTag = {
      id: generateId(),
      [labelKey || 'label']: name,
    } as unknown as Item<T>

    onChange?.([...value, newTag])
  }

  return (
    <div>
      <TagSelectInput onSubmit={onSubmit} ref={ref} {...rest} />
      {value.length > 0 && <Spacer y="$16" />}
      <TagGroup
        value={value}
        onChange={onChange}
        labelKey={labelKey}
        onTagRemoved={onTagRemoved}
        renderTag={renderTag}
        isDisabled={props.isDisabled}
      />
    </div>
  )
}

// TODO: add generic type support
export const TagSelect = forwardRef(_TagSelect)
