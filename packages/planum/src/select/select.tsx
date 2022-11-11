import { useField } from '@react-aria/label'
import useControllableValue from 'ahooks/es/useControllableValue'
import type { Ref } from 'react'
import { forwardRef } from 'react'

import { Field } from '../field'
import type { InputProps, Value } from './select-component'
import { SelectComponent } from './select-component'
import { Option } from './select-option'
import type { SelectButtonProps } from './select-trigger-button'
import { SelectTriggerButton } from './select-trigger-button'

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
  renderTrigger?: (props: SelectButtonProps) => React.ReactNode

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

            const index = triggerProps.state.selectedIndex ?? ''
            const label = items[index]?.[labelKey as any]

            // show fallback label if options not loaded yet
            const shownLabel =
              label || (value ? triggerProps.fallbackLabel : undefined)

            return <SelectTriggerButton {...triggerProps} label={shownLabel} />
          }}
          // renderOption={(optionProps) => {}}
          {...rest}>
          {items.map((item) => (
            <Option
              key={item.id}
              value={item.id}
              label={item[labelKey as any]}
              //
            >
              {item[labelKey as any]}
            </Option>
          ))}
        </SelectComponent>
      </Field>
    )
  },
)

// react forwarded not support generic type
type SelectType = <T extends object>(
  props: SelectProps<T> & { ref?: Ref<HTMLElement> },
) => JSX.Element

Select.displayName = 'Select'
