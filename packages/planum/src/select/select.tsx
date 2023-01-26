import { useField } from '@react-aria/label'
import type { Ref } from 'react'
import { forwardRef } from 'react'

import { Field } from '../field'
import type { SelectProps } from './select.types'
import { SelectComponent } from './select-component'

export const Select = forwardRef(
  (props: SelectProps, ref: Ref<HTMLDivElement>) => {
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
        <SelectComponent fieldProps={fieldProps} status={status} {...rest} />
      </Field>
    )
  },
)

Select.displayName = 'Select'
