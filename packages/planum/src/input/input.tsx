import { useFocus, useKeyboard } from '@react-aria/interactions'
import { useField } from '@react-aria/label'
import type { AriaTextFieldOptions } from '@react-aria/textfield'
import { mergeProps, useObjectRef } from '@react-aria/utils'
import * as React from 'react'

import { Field } from '../field'
import type { CSS } from '../theme'
import { __DEV__ } from '../utils/assertion'
import type { StyledInputVariants } from './input.styles'
import {
  IconWrapper,
  Prefix,
  StyledInput,
  StyledInputContainer,
  Suffix,
} from './input.styles'

function useFocused() {
  const [isFocused, setIsFocused] = React.useState(false)

  const { focusProps } = useFocus({
    onBlur: () => setIsFocused(false),
    onFocus: () => setIsFocused(true),
  })

  return {
    isFocused,
    focusProps,
  }
}

interface Props {
  label?: string
  description?: React.ReactNode
  errorMessage?: string
  successMessage?: string

  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  suffix?: React.ReactNode
  prefix?: React.ReactNode

  css?: CSS
  status?: 'success' | 'normal' | 'error'
  onEnterKeyPress?: () => void
  inputContainerRef?: (
    instance: HTMLDivElement | null,
  ) => void | React.RefObject<HTMLDivElement> | null

  preserveLabelSpace?: boolean
}

export type InputProps = StyledInputVariants &
  AriaTextFieldOptions<'input'> &
  Props

function _Input(
  props: InputProps,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  const {
    label,
    description,
    errorMessage,
    successMessage,
    status,
    isDisabled,

    leftIcon,
    rightIcon,
    suffix,
    prefix,
    inputContainerRef,
    onEnterKeyPress,
    preserveLabelSpace,
    ...rest
  } = props

  const inputRef = useObjectRef(forwardedRef)
  const { labelProps, descriptionProps, errorMessageProps, fieldProps } =
    useField(props)

  const { isFocused, focusProps } = useFocused()
  const { keyboardProps } = useKeyboard({
    onKeyUp: (e) => {
      e.stopPropagation()

      if (e.key === 'Enter') {
        onEnterKeyPress?.()
      }
    },
  })

  const hasLeftIcon = !!leftIcon
  const hasRightIcon = !!rightIcon

  const hasPrefix = prefix || hasLeftIcon
  const hasSuffix = suffix || hasRightIcon

  const mergedInputProps = mergeProps(
    fieldProps,
    keyboardProps,
    focusProps,
    rest,
  )

  return (
    <Field
      {...{
        label,
        description,
        errorMessage,
        successMessage,
        status,

        labelProps,
        descriptionProps,
        errorMessageProps,
        preserveLabelSpace,
      }}>
      <StyledInputContainer
        ref={inputContainerRef}
        onClick={() =>
          inputRef.current?.focus({
            preventScroll: true,
          })
        }
        status={status}
        isFocused={isFocused}
        isDisabled={isDisabled}>
        {hasPrefix && (
          <Prefix>
            {hasLeftIcon && (
              <IconWrapper
                css={{
                  mr: hasLeftIcon ? '$10' : 0,
                }}>
                {leftIcon}
              </IconWrapper>
            )}
            {prefix}
          </Prefix>
        )}

        <StyledInput
          disabled={isDisabled}
          {...mergedInputProps}
          onChange={(e) => {
            props?.onChange?.(e.target.value)
          }}
          ref={inputRef}
        />

        {hasSuffix && (
          <Suffix>
            {hasRightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
            {suffix}
          </Suffix>
        )}
      </StyledInputContainer>
    </Field>
  )
}

export const Input = React.forwardRef(_Input)

if (__DEV__) Input.displayName = 'Input'
