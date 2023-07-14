// copied input component, DRY code exist, we need InputBase component
import { useFocus, useKeyboard } from '@react-aria/interactions'
import { useField } from '@react-aria/label'
import type { AriaTextFieldOptions } from '@react-aria/textfield'
import { mergeProps, useObjectRef } from '@react-aria/utils'
import * as React from 'react'
import { useRifm } from 'rifm'

import { Field } from '../field'
import type { CSS } from '../theme'
import { isDev } from '../utils'
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
  containerCss?: CSS
  status?: 'success' | 'normal' | 'error'
  onEnterKeyPress?: () => void
  inputContainerRef?: (
    instance: HTMLDivElement | null,
  ) => void | React.RefObject<HTMLDivElement> | null

  preserveLabelSpace?: boolean
  role?: string

  format: (value: string) => string
  accept?: RegExp
}

export type InputMaskProps = StyledInputVariants &
  AriaTextFieldOptions<'input'> &
  Props

function _Input(
  props: InputMaskProps,
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
    format,
    accept,
    value,
    onChange,
    containerCss,
    ...rest
  } = props

  const rifm = useRifm({
    value: value || '',
    onChange: (value) => {
      onChange?.(value)
    },
    format,
    accept,
  })

  const inputRef = useObjectRef(forwardedRef)
  const { labelProps, descriptionProps, errorMessageProps, fieldProps } =
    useField(props)

  const { isFocused, focusProps } = useFocused()
  const { keyboardProps } = useKeyboard({
    onKeyUp: (e) => {
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
        isDisabled={isDisabled}
        css={containerCss}>
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
          ref={inputRef}
          disabled={isDisabled}
          {...mergedInputProps}
          value={rifm.value}
          onChange={rifm.onChange}
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

export const InputMask = React.forwardRef(_Input)

if (isDev) InputMask.displayName = 'InputMask'
