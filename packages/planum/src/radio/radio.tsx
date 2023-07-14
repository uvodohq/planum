import { VisuallyHidden } from '@react-aria/visually-hidden'
import type { AriaRadioProps } from '@react-types/radio'
import type { FocusableRef } from '@react-types/shared'
import * as React from 'react'

import { Paragraph } from '../text'
import type { CSS } from '../theme'
import {
  StyledButtonLabel,
  StyledRadioLabel,
  StyledRadioSvgCircle,
} from './radio.styles'
import { useRadioProps } from './use-radio-props'

interface Variants {
  containerCss?: CSS
  css?: CSS
}

export type RadioProps = AriaRadioProps & Variants

interface ComponentProps {
  isSelected?: boolean
  isDisabled?: any
  isHovered?: boolean
  isFocusVisible?: boolean
  children?: any
  css?: CSS
}

export const Circle = (props: ComponentProps) => (
  <>
    <StyledRadioSvgCircle
      isSelected={props.isSelected}
      isFocusVisible={props.isFocusVisible}
      isDisabled={props.isDisabled}
      isHovered={props.isHovered}
      aria-hidden="true"
      css={props.css}>
      <circle
        cx={10}
        cy={10}
        r={4}
        fill="currentColor"
        stroke="none"
        strokeWidth={2}
      />
    </StyledRadioSvgCircle>
    {props.children && <Paragraph css={{ ml: 10 }}>{props.children}</Paragraph>}
  </>
)

function _Radio(props: RadioProps, ref: FocusableRef<HTMLLabelElement>) {
  const { children, containerCss, css } = props

  const {
    type,
    full,
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

  const isButton = type === 'button'
  const Component = isButton ? 'span' : Circle
  const Label = isButton ? StyledButtonLabel : StyledRadioLabel
  const stateProps = {
    isSelected,
    isDisabled,
    isHovered,
    isFocusVisible,
    css,
    containerCss,
  }

  const componentProps = isButton ? {} : stateProps

  return (
    <Label
      {...hoverProps}
      {...stateProps}
      full={full}
      ref={domRef}
      css={containerCss}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={inputRef} />
      </VisuallyHidden>

      <Component {...componentProps}>{children}</Component>
    </Label>
  )
}

export const Radio = React.forwardRef(_Radio)

Radio.displayName = 'Radio'
