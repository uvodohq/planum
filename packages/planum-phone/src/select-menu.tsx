import useControllableValue from 'ahooks/es/useControllableValue'
import type { Ref } from 'react'
import { forwardRef } from 'react'

import type { InputProps, Value } from './select-component'
import { SelectComponent } from './select-component'
import { Option } from './select-option'

const isFalsyValue = (value: any) =>
  value === null || value === '' || value === undefined

type Item<T extends object> = {
  id: Value
} & T

type KeysWithValsOfType<T, V> = keyof {
  [P in keyof T as T[P] extends V ? P : never]: P
}

export interface SelectMenuProps<T extends object> extends InputProps {
  items: Item<T>[]

  /**
   * @description
   *
   * with labelKey - select will show which label text need to be rendered in the select box.
   * items[selectedIndex][labelKey]
   */

  //  get only keys which values is string from Item<T>
  labelKey: KeysWithValsOfType<Item<T>, Value>

  renderTrigger(): JSX.Element
}

const SelectMenu = forwardRef(
  <T extends object>(props: SelectMenuProps<T>, ref: Ref<HTMLDivElement>) => {
    const {
      items,
      value,
      defaultValue,
      onChange,
      labelKey,
      placeholder,

      status,
      isDisabled,
      css,
      renderTrigger,
      ...rest
    } = props

    const [localValue, setLocalValue] = useControllableValue(
      {
        ...(isFalsyValue(value) ? {} : { value }),
        onChange,
      },
      {
        defaultValue,
      },
    )

    return (
      <SelectComponent
        value={localValue}
        onChange={setLocalValue}
        placeholder={placeholder}
        render={(selectedIndex) => items[selectedIndex][labelKey as any]}
        isDisabled={isDisabled}
        status={status}
        css={css}
        {...rest}>
        {items.map((item) => (
          <Option
            key={item.id}
            label={item[labelKey as any]}
            value={item.id}></Option>
        ))}
      </SelectComponent>
    )
  },
)

// react forwarded not support generic type
type SelectMenuType = <T extends object>(
  props: SelectMenuProps<T> & { ref?: Ref<HTMLElement> },
) => JSX.Element

SelectMenu.displayName = 'SelectMenu'

export default SelectMenu as SelectMenuType
