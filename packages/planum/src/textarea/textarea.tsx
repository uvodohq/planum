import { useTextField } from '@react-aria/textfield'
import type { AriaTextFieldProps } from '@react-types/textfield'
import * as React from 'react'

import Field from '../field'
import type { CSS } from '../theme'
import type { StyledTextareaVariants } from './textarea.styles'
import { StyledTextarea, StyledTextareaContainer } from './textarea.styles'

interface Props {
  label?: string
  description?: string
  errorMessage?: string
  successMessage?: string

  size?: 'default' | any
  css?: CSS
}

export type TextareaProps = StyledTextareaVariants &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> &
  AriaTextFieldProps &
  Props

function Textarea(props: TextareaProps) {
  const {
    label,
    description,
    errorMessage,
    successMessage,

    onChange,
    disabled,
    isDisabled,
    status,
    ...rest
  } = props

  const ref = React.useRef<HTMLTextAreaElement>(null)
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField({ ...props, onChange, inputElementType: 'textarea' }, ref)

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
      <StyledTextareaContainer>
        <StyledTextarea
          {...rest}
          {...inputProps}
          disabled={disabled || !!isDisabled}
          isDisabled={disabled || isDisabled}
          status={status}
          ref={ref}
        />
      </StyledTextareaContainer>
    </Field>
  )
}

export default Textarea
