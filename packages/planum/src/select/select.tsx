import { useField } from '@react-aria/label'
import type { Ref } from 'react'
import { forwardRef } from 'react'

import type { FieldProps } from '../field'
import { Field } from '../field'
import type { SelectProps } from './select.types'
import { SelectComponent } from './select-component'

export const Select = forwardRef(
  (props: FieldProps & SelectProps, ref: Ref<HTMLDivElement>) => {
    const {
      label,
      description,
      errorMessage,
      successMessage,
      status,
      preserveLabelSpace,
      ...rest
    } = props

    const { labelProps, descriptionProps, errorMessageProps, fieldProps } =
      useField(props)

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
          labelProps,
          descriptionProps,
          errorMessageProps,
        }}>
        <SelectComponent fieldProps={fieldProps} status={status} {...rest} />
      </Field>
    )
  },
)

Select.displayName = 'Select'
