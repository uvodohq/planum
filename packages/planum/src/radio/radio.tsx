// TODO: add hover css to checkbox on label hover
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'
import { useRadio } from '@react-aria/radio'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useFocusableRef } from '@react-spectrum/utils'
import type { AriaRadioProps } from '@react-types/radio'
import type { FocusableRef } from '@react-types/shared'
import * as React from 'react'

import { Paragraph } from '../text'
import type { CSS } from '../theme'
import { __DEV__ } from '../utils/assertion'
import { useRadioProvider } from './context'
import { StyledLabel, StyledRadioSvg } from './radio.styles'

type Variants = React.ComponentProps<typeof StyledRadioSvg> & { css?: CSS }

export type RadioProps = AriaRadioProps & Variants

function _Radio(props: RadioProps, ref: FocusableRef<HTMLLabelElement>) {
  const { isDisabled, children, autoFocus, value } = props

  const { hoverProps, isHovered } = useHover({ isDisabled })
  const { focusProps, isFocusVisible } = useFocusRing({
    autoFocus,
  })

  const inputRef = React.useRef<HTMLInputElement>(null)
  const domRef = useFocusableRef(ref, inputRef)

  const radioGroupProps = useRadioProvider()
  const { state } = radioGroupProps

  const { inputProps } = useRadio(
    {
      ...props,
      ...radioGroupProps,
      isDisabled,
    },
    state,
    inputRef,
  )

  const isSelected = state.selectedValue === value

  return (
    <StyledLabel {...hoverProps} isHovered={isHovered} ref={domRef}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={inputRef} />
      </VisuallyHidden>

      <StyledRadioSvg
        isSelected={isSelected}
        isFocusVisible={isFocusVisible}
        isDisabled={isDisabled}
        aria-hidden="true">
        <circle
          cx={10}
          cy={10}
          r={4}
          fill="currentColor"
          stroke="none"
          strokeWidth={2}
        />
      </StyledRadioSvg>

      {children && <Paragraph css={{ ml: 10 }}>{children}</Paragraph>}
    </StyledLabel>
  )
}

export const Radio = React.forwardRef(_Radio)

if (__DEV__) {
  Radio.displayName = 'Radio'
}
