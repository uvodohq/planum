// TODO: fix generic types
import { useField } from '@react-aria/label'
import { Field } from '@uvodohq/planum'
import useControllableValue from 'ahooks/es/useControllableValue'
import type { Ref } from 'react'
import { forwardRef } from 'react'
import {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input/input'
import labels from 'react-phone-number-input/locale/en.json'

import type { InputProps, Value } from './select-component'
import { SelectComponent } from './select-component'
import { Option } from './select-option'
import type { SelectTriggerProps } from './select-trigger'
import { SelectTrigger } from './select-trigger'

type Item<T extends object> = {
  id: Value
} & T

type KeysWithValsOfType<T, V> = keyof {
  [P in keyof T as T[P] extends V ? P : never]: P
}

export interface SelectProps<T extends object> extends InputProps {
  items?: Item<T>[]

  /**
   * @description
   *
   * with labelKey - select will show which label text need to be rendered in the select box.
   * items[selectedIndex][labelKey]
   */

  //  get only keys which values is string from Item<T>
  labelKey: KeysWithValsOfType<Item<T>, Value>
  renderTrigger?: (props: SelectTriggerProps) => React.ReactNode

  // field props
  // TODO: use shared field props in all inputs
  label?: string
  description?: React.ReactNode
  errorMessage?: string
  successMessage?: string
  preserveLabelSpace?: boolean
  matchWidth?: boolean
}

const items = getCountries().map((country) => {
  const callingCode = getCountryCallingCode(country)

  return {
    label: labels[country],
    id: callingCode,
    callingCode,
  }
})

export const Select = forwardRef(
  <T extends object>(props: SelectProps<T>, ref: Ref<HTMLDivElement>) => {
    const {
      labelKey = 'id',
      placeholder,
      fallbackLabel,

      // field props
      label,
      description,
      errorMessage,
      successMessage,
      status,
      isDisabled,
      preserveLabelSpace,
      renderTrigger,
      onSelect,
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
            onSelect,
            placeholder,
            fieldProps,
            isDisabled,
            status,
            labelKey,
            fallbackLabel,
          }}
          // renderOption={(optionProps) => {}}
          {...rest}>
          {items.map((item) => (
            <Option
              key={item.id}
              value={item.id}
              label={item[labelKey as keyof Item<T>] as string}
              //
            >
              {item[labelKey as keyof Item<T>] as string}
            </Option>
          ))}
        </SelectComponent>
      </Field>
    )
  },
)

Select.displayName = 'Select'
