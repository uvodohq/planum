import { forwardRef } from 'react'

import { Box, Spacer } from '../layout'
import { TagGroup } from '../tag'
import { AutoComplete } from '.'
import type { AutoCompleteTagsProps } from './types'

function _AutoCompleteTags<T extends object>(
  props: AutoCompleteTagsProps<T>,
  _ref: React.ForwardedRef<HTMLInputElement>,
) {
  const {
    defaultValue = [],
    value = defaultValue,
    onChange,
    onSelect,
    labelKey,
    onTagRemoved,
    renderTag,
    ...rest
  } = props

  function onSubmit(selected: any) {
    // eslint-disable-next-line eqeqeq
    const isDuplicate = value.some((item) => item.id == selected.id)
    if (isDuplicate) return null

    const newItems = [...value, selected]
    onChange?.(newItems)
    onSelect?.(selected, newItems)
  }

  return (
    <Box css={{ width: '100%' }}>
      <AutoComplete
        {...rest}
        onSelect={onSubmit}
        // @ts-expect-error TODO: fix generic
        labelKey={labelKey}
        // _ref={_ref}
      />
      {value.length > 0 && <Spacer y="$16" />}
      <TagGroup
        value={value}
        onChange={onChange}
        labelKey={labelKey}
        onTagRemoved={onTagRemoved}
        renderTag={renderTag}
        isDisabled={props.isDisabled}
      />
    </Box>
  )
}

// TODO: add generic type support
export const AutoCompleteTags = forwardRef(_AutoCompleteTags)
