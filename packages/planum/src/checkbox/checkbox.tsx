// TODO: add hover state and fx types, forward ref, group
import { useCheckbox } from '@react-aria/checkbox'
import { useFocusRing } from '@react-aria/focus'
import { usePress } from '@react-aria/interactions'
import { useToggleState } from '@react-stately/toggle'
import * as React from 'react'

import { CheckboxBase } from './checkbox-base'
import type { CheckboxProps } from './type'

export function Checkbox(props: CheckboxProps) {
  const { isDisabled, isIndeterminate, label, children } = props

  const ref = React.useRef<HTMLInputElement>(null)
  const state = useToggleState(props)
  const { inputProps } = useCheckbox(props, state, ref)

  const { isFocusVisible, focusProps } = useFocusRing()
  const { pressProps } = usePress({})

  return (
    <CheckboxBase
      {...{
        isDisabled,
        isIndeterminate,
        isSelected: state.isSelected,
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
