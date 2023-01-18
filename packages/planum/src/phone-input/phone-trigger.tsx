import { useFocusWithin } from '@react-aria/interactions'
import type { HTMLAttributes } from 'react'
import { useState } from 'react'

import { Flag } from '../flag'
import { subheaderCss } from '../text'
import type { VariantProps } from '../theme'
import { styled } from '../theme'
import { SelectDownIcon } from './icons'
import type { UseSelectReturn } from './use-phone'

const StyledTriggerContainer = styled('div', subheaderCss, {
  fw: '$regular',
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none',
  width: '100%',
  maxWidth: '100%',
  transition: 'border-color 0.15s, box-shadow 0.15s',
  borderRadius: '$sm',
  cursor: 'pointer',
  color: '$textDark',
  fontWeight: '$regular',
  border: '1px solid $surface400',
  outline: 'none',
  backgroundColor: '$white',
  height: '$48',

  variants: {
    isFocused: {
      true: {},
    },

    status: {
      normal: {
        borderColor: '$surface400',

        '&:hover': {
          borderColor: '$surface600',
        },
      },

      error: {
        borderColor: '$danger700',
      },
    },

    isDisabled: {
      true: {
        '&&': {
          color: '$surface500',
          borderColor: '$surface400',
          backgroundColor: '$surface100',
          boxShadow: 'none',
          disableActions: true,
        },
      },
    },
  },

  defaultVariants: {
    status: 'normal',
  },

  compoundVariants: [
    {
      isFocused: true,
      status: 'normal',
      css: {
        borderColor: '$primary600',
        boxShadow: '0 0 0 3px $colors$primary100',
        '&:hover': {
          borderColor: '$primary600',
        },
      },
    },
    {
      isFocused: true,
      status: 'error',
      css: {
        boxShadow: '0 0 0 3px $colors$danger100',
      },
    },
  ],
})

export const FlagButtonContainer = styled('button', {
  dflex: 'center',
  padding: '$8 $16',
  height: '100%',
  transition: 'background-color 0.3s',
  outline: 'none',
  borderRadius: '4px 0 0 4px',
  border: '1px solid transparent',

  '&:hover': {
    backgroundColor: '$surface100',
  },

  '&:focus': {
    backgroundColor: '$surface100',
  },

  '&[data-open="true"]': {
    backgroundColor: '$surface100',
  },
})

export const StyledLine = styled('span', {
  bg: '$surface400',
  width: 1,
  height: '100%',
})

export const StyledInput = styled('input', {
  width: '100%',
  flex: 1,
  height: '100%',
  padding: '$8 $16',
  outline: 'none',
})

export type StyledMessageVariants = VariantProps<typeof SelectTrigger>

export interface SelectTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  select: UseSelectReturn
  isDisabled?: boolean
  isLoading?: boolean
  status?: 'normal' | 'error' | 'success'
  placeholder?: string
  label?: string
  fallbackLabel?: string
  labelKey?: string
}

function useFocusedWithin() {
  const [isFocused, setIsFocused] = useState(false)
  const { focusWithinProps } = useFocusWithin({
    onBlurWithin: () => setIsFocused(false),
    onFocusWithin: () => setIsFocused(true),
  })

  return {
    isFocused,
    focusWithinProps,
  }
}

export function SelectTrigger(props: SelectTriggerProps) {
  const {
    select,
    isDisabled,
    isLoading,
    label,
    placeholder,
    labelKey,
    items,
    ...rest
  } = props

  const {
    buttonId,
    reference,
    isOpen,
    getReferenceProps,
    selectedItem: country,
    setIsOpen,
    _valuePhone,
    onPhoneNumberChange,
    phoneInputRef,
  } = select

  const countryCode = country[2]
  const placeholderMask =
    _valuePhone.country[4]?.replace(/\./g, '_') ?? 'Enter phone'

  const { isFocused, focusWithinProps } = useFocusedWithin()

  return (
    <StyledTriggerContainer
      tabIndex={1}
      ref={reference}
      isDisabled={isDisabled}
      isFocused={isFocused}
      {...focusWithinProps}>
      <FlagButtonContainer
        id={buttonId}
        type="button" // prevent unwanted form submits within <form>
        disabled={isDisabled || isLoading} // native way to disable the button
        aria-label={label}
        aria-autocomplete="none"
        data-open={isOpen}
        {...rest}
        {...getReferenceProps()}
        // "combobox", but Safari has a bug with VoiceOver
        role={undefined}>
        <Flag country={countryCode} css={{ mr: 8, width: 24, minWidth: 24 }} />
        <SelectDownIcon isOpen={isOpen} />
      </FlagButtonContainer>
      <StyledLine />

      <StyledInput
        tabIndex={0}
        ref={phoneInputRef}
        placeholder={placeholderMask}
        type="tel"
        value={_valuePhone.formatted}
        onChange={onPhoneNumberChange}
        onFocus={() => {
          if (isOpen) {
            setIsOpen(false)
          }
        }}
        style={{
          color: label ? '$textDark' : '',
        }}
      />
    </StyledTriggerContainer>
  )
}
