import * as React from 'react'

import { Button } from '../button'
import { useMergeRefs } from '../hooks'
import { Input } from '../input'
import { PlusIcon } from './plus-icon'

interface TagSelectInputProps {
  onSubmit: (value: string) => void
  label?: string
  placeholder?: string
}

function TagSelectInput(
  props: TagSelectInputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { onSubmit, ...rest } = props
  const [value, setValue] = React.useState('')

  const inputRef = React.useRef<HTMLInputElement>()
  const mergeRef = useMergeRefs(inputRef, ref)

  function handleSubmit() {
    if (value.trim()) {
      setValue('')
      onSubmit(value)
    }
    inputRef?.current?.focus()
  }

  return (
    <Input
      {...rest}
      value={value}
      onChange={setValue}
      onEnterKeyPress={handleSubmit}
      ref={mergeRef}
      suffix={
        <Button
          aria-label="Add tag"
          variant="secondaryDark"
          icon={<PlusIcon />}
          size="sm"
          css={{ mr: '-$12' }}
          onClick={handleSubmit}
        />
      }
    />
  )
}

const _TagSelectInput = React.forwardRef(TagSelectInput)

export { _TagSelectInput as TagSelectInput }
