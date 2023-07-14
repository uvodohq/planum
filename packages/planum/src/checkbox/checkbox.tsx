// TODO: add hover state and fx types, forward ref, group
import { useCheckbox } from '@react-aria/checkbox'
import { useFocusRing } from '@react-aria/focus'
import { usePress } from '@react-aria/interactions'
import { useFocusableRef } from '@react-spectrum/utils'
import { useToggleState } from '@react-stately/toggle'
import type { FocusableRef } from '@react-types/shared'
import * as React from 'react'

import { CheckboxBase } from './checkbox-base'
import type { CheckboxProps } from './type'

function CheckboxComponent(
  props: CheckboxProps,
  forwardRef: FocusableRef<HTMLInputElement>,
) {
  const { isDisabled, isIndeterminate, label, children, css, containerCss } =
    props

  const inputRef = React.useRef<HTMLInputElement>(null)
  const ref = useFocusableRef(forwardRef, inputRef)
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
        css,
        containerCss,
      }}
    />
  )
}

export const Checkbox = React.forwardRef(CheckboxComponent)
Checkbox.displayName = 'Checkbox'
