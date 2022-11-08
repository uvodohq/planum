// TODO: add hover state and fx types, forward ref, group
import { useCheckbox } from '@react-aria/checkbox'
import { useFocusRing } from '@react-aria/focus'
import { usePress } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useToggleState } from '@react-stately/toggle'
import type { AriaCheckboxProps, ToggleProps } from '@react-types/checkbox'
import * as React from 'react'

import { useIsFirstRender } from '../hooks'
import { Paragraph } from '../text'
import type { CSS } from '../theme'
import type { StyledCheckboxVariants } from './checkbox.styles'
import { StyledCheckbox, StyledIndicator, StyledLabel } from './checkbox.styles'
import { CheckIcon, MinusIcon } from './icons'

interface Props {
  css?: CSS
  label?: string
  children?: string
}

export type CheckboxProps = Props &
  StyledCheckboxVariants &
  ToggleProps &
  AriaCheckboxProps

function Checkbox(props: CheckboxProps) {
  const { isDisabled, isIndeterminate, label, children } = props

  const state = useToggleState(props)
  const ref = React.useRef<HTMLInputElement>(null)
  const { inputProps } = useCheckbox(props, state, ref)

  const { isFocusVisible, focusProps } = useFocusRing()
  const { pressProps } = usePress({})

  // don't run check animation on first render
  const isFirstRender = useIsFirstRender()

  const labelText = label || children
  const hasLabel = !!labelText

  let markIcon

  if (state.isSelected) {
    markIcon = (
      <StyledIndicator>
        <CheckIcon disableInitialAnimation={isFirstRender} />
      </StyledIndicator>
    )
  } else if (isIndeterminate) {
    markIcon = (
      <StyledIndicator>
        <MinusIcon />
      </StyledIndicator>
    )
  }

  return (
    <StyledLabel>
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

      {hasLabel && <Paragraph css={{ ml: 10 }}>{labelText}</Paragraph>}
    </StyledLabel>
  )
}

export default Checkbox
