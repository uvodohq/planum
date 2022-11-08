import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'
import { useSwitch } from '@react-aria/switch'
import { mergeProps } from '@react-aria/utils'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useFocusableRef } from '@react-spectrum/utils'
import { useToggleState } from '@react-stately/toggle'
import type { FocusableRef } from '@react-types/shared'
import type { AriaSwitchProps } from '@react-types/switch'
import * as React from 'react'

import { __DEV__ } from '~/utils/assertion'

import { Paragraph } from '../../text'
import type { CSS } from '../theme'
import type { StyledSwitchVariants } from './toggle.styles'
import { StyledLabel, StyledSwitch, StyledThumb } from './toggle.styles'

interface Props extends StyledSwitchVariants {
  css?: CSS
  labelTextOn?: string
  labelTextOff?: string
}

export type ToggleProps = Props & AriaSwitchProps

function _Toggle(props: ToggleProps, ref: FocusableRef<HTMLLabelElement>) {
  const { isDisabled = false, labelTextOn = 'On', labelTextOff = 'Off' } = props

  const inputRef = React.useRef<HTMLInputElement>(null)
  const domRef = useFocusableRef(ref, inputRef)
  const state = useToggleState(props)
  const { inputProps } = useSwitch(props, state, inputRef)

  const { hoverProps, isHovered } = useHover({ isDisabled })
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <StyledLabel {...hoverProps} ref={domRef}>
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={inputRef} />
      </VisuallyHidden>

      <StyledSwitch
        isSelected={state.isSelected}
        isFocusVisible={isFocusVisible}
        isDisabled={isDisabled}
        isHovered={isHovered}>
        <StyledThumb />
      </StyledSwitch>

      <Paragraph css={{ ml: 10 }}>
        {state.isSelected ? labelTextOn : labelTextOff}
      </Paragraph>
    </StyledLabel>
  )
}

export const Toggle = React.forwardRef(_Toggle)

export default Toggle

if (__DEV__) {
  Toggle.displayName = 'Toggle'
}
