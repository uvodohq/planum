/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFocus } from '@react-aria/interactions'
import { useSearchField } from '@react-aria/searchfield'
import { mergeProps, useObjectRef } from '@react-aria/utils'
import type { SearchFieldProps } from '@react-stately/searchfield'
import { useSearchFieldState } from '@react-stately/searchfield'
import type { AriaTextFieldProps } from '@react-types/textfield'
import * as React from 'react'

import { Field } from '../field'
import type { StyledInputVariants } from '../input/input.styles'
import { StyledInputContainer } from '../input/input.styles'
import { Loader } from '../loader'
import type { CSS } from '../theme'
import { isDev } from '../utils'
import { Prefix, StyledInput, Suffix } from './input-search.styles'
import { SearchIcon } from './search-icon'

interface Props {
  label?: string
  description?: React.ReactNode
  isSearching?: boolean
  errorMessage?: string
  successMessage?: string

  // leftIcon?: React.ReactNode
  // rightIcon?: React.ReactNode
  // suffix?: React.ReactNode
  // prefix?: React.ReactNode
  size?: 'default' | any
  css?: CSS
  isLoading?: boolean
  alignSearchIcon?: 'left' | 'right'
}

interface Status {
  status?: 'success' | 'normal' | 'error'
}

export type InputSearchProps = StyledInputVariants &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> &
  AriaTextFieldProps &
  SearchFieldProps &
  Props &
  Status

function _InputSearch(props: InputSearchProps, forwardedRef: any) {
  const {
    label,
    description,
    isLoading,
    errorMessage,
    successMessage,

    // leftIcon,
    // rightIcon,
    // suffix,
    // prefix,

    // disabled,
    isDisabled,
    status,

    onChange,
    alignSearchIcon = 'left',
    ...rest
  } = props

  const ref = useObjectRef<any>(forwardedRef)
  const state = useSearchFieldState(props)
  const { labelProps, inputProps } = useSearchField(props, state, ref)

  const [isFocused, setIsFocused] = React.useState(false)
  const { focusProps } = useFocus({
    onBlur: () => setIsFocused(false),
    onFocus: () => setIsFocused(true),
  })

  // const hasPrefix = prefix || leftIcon
  // const hasSuffix = suffix || rightIcon

  let rightContent

  if (isLoading) {
    rightContent = (
      <Suffix>
        <Loader size="small" />
      </Suffix>
    )
  } else if (alignSearchIcon === 'right') {
    rightContent = (
      <Suffix>
        <SearchIcon />
      </Suffix>
    )
  }

  return (
    <Field
      {...{
        label,
        description,
        errorMessage,
        successMessage,
        status,
        labelProps,
      }}>
      <StyledInputContainer
        onClick={() => ref.current?.focus()}
        isFocused={isFocused}>
        {alignSearchIcon === 'left' && (
          <Prefix>
            <SearchIcon />
          </Prefix>
        )}

        <StyledInput
          {...mergeProps(inputProps, focusProps)}
          {...rest}
          ref={ref}
        />

        {rightContent}
      </StyledInputContainer>
    </Field>
  )
}

export const InputSearch = React.forwardRef(_InputSearch)

if (isDev) InputSearch.displayName = 'InputSearch'
