import { VisuallyHidden } from '@react-aria/visually-hidden'
import type { AriaRadioProps } from '@react-types/radio'
import type { FocusableRef } from '@react-types/shared'
import * as React from 'react'

import { Paragraph } from '../text'
import type { CSS } from '../theme'
import {
  StyledRadioButtonLabel,
  StyledRadioLabel,
  StyledRadioSvg,
} from './radio.styles'
import { useRadioProps } from './use-radio-props'

interface Variants {
  css?: CSS
  isHovered: boolean
  isSelected: boolean
  isDisabled: boolean
  isFocusVisible: boolean
}

export type RadioProps = AriaRadioProps & Variants

interface ComponentProps {
  isSelected: boolean
  isDisabled: any
  isHovered: boolean
  isFocusVisible: boolean
  children?: any
}

const Circle = (props: ComponentProps) => (
  <>
    <StyledRadioSvg
      isSelected={props.isSelected}
      isFocusVisible={props.isFocusVisible}
      isDisabled={props.isDisabled}
      isHovered={props.isHovered}
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
    {props.children && <Paragraph css={{ ml: 10 }}>{props.children}</Paragraph>}
  </>
)

function _Radio(props: RadioProps, ref: FocusableRef<HTMLLabelElement>) {
  const { children } = props

  const {
    type,
    inputProps,
    hoverProps,
    focusProps,
    isSelected,
    isDisabled,
    isHovered,
    isFocusVisible,
    inputRef,
    domRef,
  } = useRadioProps(props, ref)

  const Component = type === 'button' ? 'span' : Circle
  const Label = type === 'button' ? StyledRadioButtonLabel : StyledRadioLabel

  return (
    <Label
      {...hoverProps}
      {...{ isSelected, isDisabled, isHovered, isFocusVisible }}
      ref={domRef}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={inputRef} />
      </VisuallyHidden>

      <Component
        {...{ isSelected, isDisabled, isHovered, isFocusVisible, children }}
      />
    </Label>
  )
}

export const Radio = React.forwardRef(_Radio)

Radio.displayName = 'Radio'
