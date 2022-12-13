// TODO: add hover state and fx types, forward ref, group
import { useCheckboxGroupItem } from '@react-aria/checkbox'
import { useFocusRing } from '@react-aria/focus'
import { usePress } from '@react-aria/interactions'
import * as React from 'react'

import { CheckboxBase } from './checkbox-base'
import { useCheckboxGroupProvider } from './context'
import type { CheckboxGroupItemProps } from './type'

export function CheckboxGroupItem(props: CheckboxGroupItemProps) {
  const { isIndeterminate, label, value, children } = props

  const ref = React.useRef<HTMLInputElement>(null)
  const state = useCheckboxGroupProvider()
  const { inputProps } = useCheckboxGroupItem(props, state, ref)

  const { isFocusVisible, focusProps } = useFocusRing()
  const { pressProps } = usePress({})

  const isDisabled = state.isDisabled || props.isDisabled
  const isSelected = state.isSelected(value)

  return (
    <CheckboxBase
      {...{
        isDisabled,
        isIndeterminate,
        isSelected,
        isFocusVisible,
        label,
        pressProps,
        inputProps,
        focusProps,
        children,
        inputRef: ref,
      }}
    />
  )
}
