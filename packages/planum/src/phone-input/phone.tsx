import { useField } from '@react-aria/label'
import type { Ref } from 'react'
import { forwardRef } from 'react'

import { Field } from '../field'
import { useControllableValue } from '../hooks'
import type { InputProps } from './phone-component'
import { SelectComponent } from './phone-component'
import type { SelectTriggerProps } from './phone-trigger'

export interface SelectProps extends InputProps {
  items?: any[]
  labelKey: string
  renderTrigger?: (props: SelectTriggerProps) => React.ReactNode
  label?: string
  description?: React.ReactNode
  errorMessage?: string
  successMessage?: string
  preserveLabelSpace?: boolean
  matchWidth?: boolean
}

export const PhoneInput = forwardRef(
  (props: SelectProps, ref: Ref<HTMLDivElement>) => {
    const {
      items = [],
      labelKey = 'id',
      placeholder,
      // field props
      label,
      description,
      errorMessage,
      successMessage,
      status,
      isDisabled,
      preserveLabelSpace,
      ...rest
    } = props

    const { labelProps, fieldProps, descriptionProps, errorMessageProps } =
      useField(props)

    const [value, onChange] = useControllableValue(props)

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
        <SelectComponent
          {...{
            items,
            value,
            onChange,
            placeholder,
            fieldProps,
            isDisabled,
            status,
            labelKey,
          }}
          {...rest}
        />
      </Field>
    )
  },
)

PhoneInput.displayName = 'PhoneInput'
