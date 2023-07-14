import { useFocus } from '@react-aria/interactions'
import { useField } from '@react-aria/label'
import { mergeProps, useObjectRef } from '@react-aria/utils'
import InputNumberRc from 'rc-input-number'
import type { InputNumberProps as RcInputNumberProps } from 'rc-input-number/lib/InputNumber'
import * as React from 'react'

import { Field } from '../field'
import type { CSS } from '../theme'
import { isDev } from '../utils'
import type { StyledInputVariants } from './input-number.styles'
import {
  IconWrapper,
  inputCss,
  Prefix,
  StyledInputContainer,
  Suffix,
} from './input-number.styles'

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

  size?: 'default' | any
  containerCss?: CSS
  css?: CSS
  status?: 'success' | 'normal' | 'error'
  format?: (value: any) => any
}

export type InputNumberProps = Omit<StyledInputVariants, 'isFocused'> &
  Props &
  RcInputNumberProps

function _InputNumber(
  props: InputNumberProps,
  forwardedRef: React.Ref<HTMLInputElement>,
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
    containerCss,

    format = (val) => val,
    ...rest
  } = props

  const inputRef = useObjectRef(forwardedRef)
  const { labelProps, descriptionProps, errorMessageProps, fieldProps } =
    useField(props)

  const { isFocused, focusProps } = useFocused()

  const hasLeftIcon = !!leftIcon
  const hasRightIcon = !!rightIcon

  const hasPrefix = prefix || hasLeftIcon
  const hasSuffix = suffix || hasRightIcon

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
      }}>
      <StyledInputContainer
        onClick={() => {
          inputRef.current?.focus({
            preventScroll: true,
          })
        }}
        status={status}
        isFocused={isFocused}
        isDisabled={isDisabled}
        css={containerCss}>
        {hasPrefix && (
          <Prefix
            css={{
              mr: hasLeftIcon ? '$10' : 0,
            }}>
            {hasLeftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
            {prefix}
          </Prefix>
        )}

        <InputNumberRc
          className={inputCss()}
          prefixCls="planum-input-number"
          ref={inputRef}
          controls={false}
          decimalSeparator="."
          formatter={(value, { userTyping, input }) => {
            if (userTyping) {
              return input
            }

            if (value === '') return ''

            return format(value)
          }}
          {...mergeProps(rest, fieldProps, focusProps)}
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

export const InputNumber = React.forwardRef(_InputNumber)

if (isDev) InputNumber.displayName = 'InputNumber'
