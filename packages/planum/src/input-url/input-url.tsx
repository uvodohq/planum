import * as React from 'react'
import { Subheader } from 'src'

import type { InputProps } from '~/.'
import { Input } from '~/.'
import { __DEV__ } from '~/utils/assertion'

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

const InputUrl = React.forwardRef(_InputUrl)
export default InputUrl

if (__DEV__) InputUrl.displayName = 'InputUrl'
