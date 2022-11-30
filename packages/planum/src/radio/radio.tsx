// TODO: add hover css to checkbox on label hover
import { VisuallyHidden } from '@react-aria/visually-hidden'
import type { AriaRadioProps } from '@react-types/radio'
import type { FocusableRef } from '@react-types/shared'
import * as React from 'react'

import { Paragraph } from '../text'
import type { CSS } from '../theme'
import { StyledLabel, StyledRadioButton, StyledRadioSvg } from './radio.styles'
import { useRadioProps } from './use-radio-props'

type Variants = React.ComponentProps<typeof StyledRadioSvg> & { css?: CSS }

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

const Button = (props: ComponentProps) => {
  return (
    <StyledRadioButton
      isSelected={props.isSelected}
      isFocusVisible={props.isFocusVisible}
      isDisabled={props.isDisabled}>
      {props.children}
    </StyledRadioButton>
  )
}

function _Radio(props: RadioProps, ref: FocusableRef<HTMLLabelElement>) {
  const { children } = props

  const {
    type,
    inputProps,
    hoverProps,
    focusProps,

    //
    isSelected,
    isDisabled,
    isHovered,
    isFocusVisible,

    //
    inputRef,
    domRef,
  } = useRadioProps(props, ref)

  const Component = type === 'button' ? Button : Circle

  return (
    <StyledLabel {...hoverProps} isHovered={isHovered} ref={domRef}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={inputRef} />
      </VisuallyHidden>

      <Component
        {...{ isSelected, isDisabled, isHovered, isFocusVisible, children }}
      />
    </StyledLabel>
  )
}

export const Radio = React.forwardRef(_Radio)

Radio.displayName = 'Radio'
