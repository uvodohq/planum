// @ts-nocheck
import { useFocus } from '@react-aria/interactions'
import { mergeProps, useObjectRef } from '@react-aria/utils'
import type { AriaNumberFieldProps } from '@react-types/numberfield'
import * as React from 'react'
import { NumberFormatBase, NumericFormat } from 'react-number-format'

import { Field } from '../field'
import type { CSS } from '../theme'
import { __DEV__ } from '../utils/assertion'
import type { StyledInputVariants } from './input-number.styles'
import {
  IconWrapper,
  Prefix,
  StyledInput,
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
  css?: CSS
  status?: 'success' | 'normal' | 'error'
}

const format = (numStr) => {
  if (numStr === '') return ''
  const value = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    // currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(numStr)

  console.log({ value, numStr })
  return value
}

export type InputNumberProps = Omit<StyledInputVariants, 'isFocused'> &
  AriaNumberFieldProps &
  Props

function _InputNumber(
  props: InputNumberProps,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  const {
    label,
    description,
    errorMessage,
    successMessage,
    status,
    isDisabled,
    onChange,

    leftIcon,
    rightIcon,
    suffix,
    prefix,

    ...rest
  } = props

  const inputRef = useObjectRef(forwardedRef)
  const { isFocused, focusProps } = useFocused()

  const hasLeftIcon = !!leftIcon
  const hasRightIcon = !!rightIcon

  const hasPrefix = prefix || hasLeftIcon
  const hasSuffix = suffix || hasRightIcon

  // workaround, to send latest values to parent state.
  useUpdateEffect(() => {
    if (state.inputValue?.endsWith('.')) return

    state.commit()
  }, [state.inputValue])

  return (
    <Field
      {...{
        label,
        description,
        errorMessage,
        successMessage,
        status,

        // labelProps,
        // descriptionProps,
        // errorMessageProps,
      }}>
      <StyledInputContainer
        onClick={() =>
          inputRef.current?.focus({
            preventScroll: true,
          })
        }
        status={status}
        isFocused={isFocused}
        isDisabled={isDisabled}>
        {hasPrefix && (
          <Prefix
            css={{
              mr: hasLeftIcon ? '$10' : 0,
            }}>
            {hasLeftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
            {prefix}
          </Prefix>
        )}
        <NumericFormat
          {...mergeProps(rest, focusProps)}
          // isNumericString
          // valueIsNumericString
          // decimalSeparator={'.'}
          thousandSeparator=","
          decimalScale={3}
          // fixedDecimalScale
          // format={format}
          onValueChange={(values) => {
            console.log('values -', props.name, values)

            const value = values.floatValue ?? null

            onChange(value)
          }}
          getInputRef={inputRef}
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

if (__DEV__) InputNumber.displayName = 'InputNumber'
