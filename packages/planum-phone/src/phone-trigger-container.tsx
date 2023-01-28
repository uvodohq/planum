import { Flag, styled, subheaderCss, useFocusWithin } from '@uvodohq/planum'
import type { HTMLAttributes } from 'react'
import { useState } from 'react'

import { SelectDownIcon } from './icons'
import type { PhoneTriggerProps } from './phone.types'
import { usePhoneContext } from './phone-context'

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
      success: {
        borderColor: '$success700',
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

const FlagButtonContainer = styled('button', {
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

const StyledLine = styled('span', {
  bg: '$surface400',
  width: 1,
  height: '100%',
})

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

type Props = PhoneTriggerProps & HTMLAttributes<HTMLButtonElement>

export function PhoneTriggerContainer(props: Props) {
  const { isDisabled, isLoading, status, children, ...rest } = props
  const { phone, state } = usePhoneContext()
  const { buttonId, reference, getReferenceProps } = phone
  const { isOpen, selectedItem } = state

  const { isFocused, focusWithinProps } = useFocusedWithin()

  return (
    <StyledTriggerContainer
      tabIndex={1}
      ref={reference}
      isDisabled={isDisabled}
      isFocused={isFocused}
      status={status}
      {...focusWithinProps}>
      <FlagButtonContainer
        id={buttonId}
        type="button" // prevent unwanted form submits within <form>
        disabled={isDisabled || isLoading} // native way to disable the button
        aria-autocomplete="none"
        data-open={isOpen}
        {...rest}
        {...getReferenceProps()}
        // "combobox", but Safari has a bug with VoiceOver
        role={undefined}>
        <Flag
          country={selectedItem?.id || ''}
          css={{ mr: 8, width: 24, minWidth: 24 }}
        />
        <SelectDownIcon isOpen={isOpen} />
      </FlagButtonContainer>
      <StyledLine />
      {/* phone input goes here as children */}
      {children}
    </StyledTriggerContainer>
  )
}
