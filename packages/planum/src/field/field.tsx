import type { HTMLAttributes, ReactNode, Ref } from 'react'
import * as React from 'react'

import { Box } from '../layout'
import type { CSS } from '../theme'
import { isDev } from '../utils'
import type { StyledMessageVariants } from './field.styles'
import { FieldContainer, StyledLabel, StyledMessage } from './field.styles'

export interface FieldProps extends StyledMessageVariants {
  label?: React.ReactNode
  description?: React.ReactNode
  errorMessage?: React.ReactNode
  successMessage?: React.ReactNode

  labelProps: HTMLAttributes<HTMLElement>
  descriptionProps?: HTMLAttributes<HTMLElement>
  errorMessageProps?: HTMLAttributes<HTMLElement>
  children: ReactNode

  preserveLabelSpace?: boolean
  css?: CSS
}

function _Field(props: FieldProps, ref: Ref<HTMLDivElement>) {
  const {
    label,
    preserveLabelSpace,
    description,
    errorMessage,
    successMessage,
    status = 'normal',
    labelProps,
    descriptionProps = {},
    errorMessageProps = {},
    children,
    css = {},
  } = props

  let messageProps

  if (status === 'error') {
    messageProps = {
      ...errorMessageProps,
      children: errorMessage,
      status,
    }
  } else if (status === 'success') {
    messageProps = {
      ...descriptionProps,
      children: successMessage,
      status,
    }
  } else {
    messageProps = {
      ...descriptionProps,
      children: description,
      status,
    }
  }

  const hasMessage = messageProps.children

  return (
    <FieldContainer ref={ref} css={css}>
      {(label || preserveLabelSpace) && (
        <StyledLabel {...labelProps}>{label}</StyledLabel>
      )}
      <Box
        css={{
          mb: hasMessage ? '$8' : '0',
        }}>
        {children}
      </Box>
      {hasMessage && <StyledMessage {...messageProps} />}
    </FieldContainer>
  )
}

export const Field = React.forwardRef(_Field)

if (isDev) {
  Field.displayName = 'Field'
}
