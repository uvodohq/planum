import { Field, useField } from '@uvodohq/planum'
import type { Ref } from 'react'
import { forwardRef } from 'react'

import type { PhoneProps } from './phone.types'
import { PhoneComponent } from './phone-component'

export const Phone = forwardRef(
  (props: PhoneProps, ref: Ref<HTMLDivElement>) => {
    const {
      label,
      description,
      errorMessage,
      successMessage,
      status,
      preserveLabelSpace,
      ...rest
    } = props

    const { fieldProps, ...restFieldProps } = useField(props)

    return (
      <Field
        ref={ref}
        {...{
          label,
          description,
          errorMessage,
          successMessage,
          status,
          preserveLabelSpace,
          ...restFieldProps,
        }}>
        <PhoneComponent fieldProps={fieldProps} status={status} {...rest} />
      </Field>
    )
  },
)

Phone.displayName = 'Phone'
