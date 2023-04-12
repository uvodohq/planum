import * as React from 'react'
import { useRifm } from 'rifm'

import { Input } from '../input'
import type { InputProps } from '../input/input'
import { isDev } from '../utils'

export interface InputMaskProps extends Omit<InputProps, 'prefix' | 'suffix'> {
  format: (value: string) => string
  accept: RegExp | undefined
}

function _InputMask(
  props: InputMaskProps,
  forwardedRef: React.Ref<HTMLInputElement>,
) {
  const { format, accept, value, ...rest } = props

  const rifm = useRifm({
    value: value ?? '',
    onChange: (value: string) => {
      props?.onChange?.(value)
    },
    format,
    accept,
  })

  return (
    <Input
      {...rest}
      ref={forwardedRef}
      value={rifm.value}
      onChangeNative={rifm.onChange}
    />
  )
}

export const InputMask = React.forwardRef(_InputMask)

if (isDev) InputMask.displayName = 'InputMask'
