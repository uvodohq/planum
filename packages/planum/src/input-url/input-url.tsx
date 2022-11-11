import * as React from 'react'

import { Input } from '../input'
import type { InputProps } from '../input/input'
import { Subheader } from '../text'
import { __DEV__ } from '../utils/assertion'

export interface InputUrlProps extends Omit<InputProps, 'prefix' | 'suffix'> {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

const WrapperBox = (props: any) => (
  <Subheader
    css={{
      minWidth: 'fit-content',
      dflex: 'center',
      disableActions: true,
      fw: '$regular',
    }}
    as="span"
    {...props}
  />
)

function _InputUrl(
  props: InputUrlProps,
  forwardedRef: React.Ref<HTMLInputElement>,
) {
  const { prefix, suffix } = props

  return (
    <Input
      {...props}
      type="url"
      ref={forwardedRef}
      prefix={<WrapperBox>{prefix}</WrapperBox>}
      suffix={<WrapperBox>{suffix}</WrapperBox>}
    />
  )
}

export const InputUrl = React.forwardRef(_InputUrl)

if (__DEV__) InputUrl.displayName = 'InputUrl'
