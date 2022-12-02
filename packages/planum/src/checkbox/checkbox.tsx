// TODO: add hover state and fx types, forward ref, group
import { useCheckbox } from '@react-aria/checkbox'
import { useFocusRing } from '@react-aria/focus'
import { usePress } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useToggleState } from '@react-stately/toggle'
import * as React from 'react'

import { Paragraph } from '../text'
import { StyledCheckbox, StyledIndicator, StyledLabel } from './checkbox.styles'
import type { CheckboxProps } from './checkbox.type'
import { CheckIcon, MinusIcon } from './icons'

export function Checkbox(props: CheckboxProps) {
  const { isDisabled, isIndeterminate, label, children } = props

  const ref = React.useRef<HTMLInputElement>(null)
  const state = useToggleState(props)
  const { inputProps } = useCheckbox(props, state, ref)

  const { isFocusVisible, focusProps } = useFocusRing()
  const { pressProps } = usePress({})

  const labelText = label || children
  const hasLabel = !!labelText

  const markIcon = isIndeterminate ? (
    <StyledIndicator>
      <MinusIcon />
    </StyledIndicator>
  ) : (
    <StyledIndicator>
      <CheckIcon isSelected={state.isSelected} />
    </StyledIndicator>
  )

  return (
    <StyledLabel isDisabled={isDisabled}>
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>

      <StyledCheckbox
        isSelected={state.isSelected}
        isFocusVisible={isFocusVisible}
        isDisabled={isDisabled}
        isIndeterminate={isIndeterminate}
        {...pressProps}>
        {markIcon}
      </StyledCheckbox>

      {hasLabel && <Paragraph css={{ m: 0, ml: 10 }}>{labelText}</Paragraph>}
    </StyledLabel>
  )
}
