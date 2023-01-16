import { useField } from '@react-aria/label'
import type { Ref } from 'react'
import { forwardRef } from 'react'

import { Field } from '../field'
import { useControllableValue } from '../hooks'
import type { InputProps, Value } from './select-component'
import { SelectComponent } from './select-component'
import { Option } from './select-option'
import type { SelectTriggerProps } from './select-trigger'
import { SelectTrigger } from './select-trigger'

type Item<T extends object> = {
  id: Value
} & T

// TODO: fix generic types
// type KeysWithValsOfType<T, V> = keyof {
//   [P in keyof T as T[P] extends V ? P : never]: P
// }

export interface SelectProps<T extends object> extends InputProps {
  items?: Item<T>[]

  /**
   * @description
   *
   * with labelKey - select will show which label text need to be rendered in the select box.
   * items[selectedIndex][labelKey]
   */

  //  get only keys which values is string from Item<T>
  // labelKey: KeysWithValsOfType<Item<T>, Value>
  labelKey: string
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

export const Select = forwardRef(
  <T extends object>(props: SelectProps<T>, ref: Ref<HTMLDivElement>) => {
    const {
      items = [],
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
          renderTrigger={(triggerProps) => {
            if (renderTrigger) {
              return renderTrigger(triggerProps)
            }

            const { select, fallbackLabel } = triggerProps
            const { selectedItem, options } = select
            const label = selectedItem?.[labelKey as keyof Item<T>]

            // show fallback label if options not loaded yet
            const shownLabel = label || (value ? fallbackLabel : undefined)

            return (
              <SelectTrigger {...triggerProps} label={shownLabel as string} />
            )
          }}
          // renderOption={(optionProps) => {}}
          {...rest}
        />
      </Field>
    )
  },
)

// react forward not support generic type
type SelectType = <T extends object>(
  props: SelectProps<T> & { ref?: Ref<HTMLElement> },
) => JSX.Element

Select.displayName = 'Select'
