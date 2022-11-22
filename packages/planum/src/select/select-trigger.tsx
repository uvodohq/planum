import type { HTMLAttributes } from 'react'

import { Loader } from '../loader'
import { subheaderCss } from '../text'
import type { VariantProps } from '../theme'
import { styled } from '../theme'
import { CaretDownIcon } from '@uvodohq/planum-icons'
import type { UseSelectReturn } from './use-select'
import type { SelectState } from './use-select-state'

const IconContainer = styled('span', {
  dflex: 'center',
  display: 'inline-flex',
  color: '$surface600',
  transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',

  variants: {
    isOpen: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
})

const StyledButton = styled('button', subheaderCss, {
  fw: '$regular',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none',

  width: '100%',
  maxWidth: '100%',
  transition: 'border-color 0.15s, box-shadow 0.15s',

  borderRadius: '$sm',
  overflow: 'hidden',
  cursor: 'pointer',
  color: '$textDark',
  fontWeight: '$regular',
  border: '1px solid $surface400',
  outline: 'none',
  backgroundColor: '$white',

  variants: {
    size: {
      default: {
        height: '$48',
        borderRadius: '$sm',
        padding: '$8 $16',
      },
    },

    status: {
      normal: {
        borderColor: '$surface400',

        '&:hover': {
          borderColor: '$surface600',
        },

        '&:focus': {
          borderColor: '$primary600',
          boxShadow: '0 0 0 3px $colors$primary100',
        },
      },

      error: {
        borderColor: '$danger700',

        '&:focus': {
          boxShadow: '0 0 0 3px $colors$danger100',
        },
      },

      success: {
        borderColor: '$success700',

        '&:focus': {
          boxShadow: '0 0 0 3px $colors$success100',
        },
      },
    },

    variant: {
      secondaryDark: {
        backgroundColor: '$surface100',
        borderColor: '$surface200',
        color: '$textDark',

        '&:hover': {
          backgroundColor: '$surface200',
          borderColor: '$surface300',
        },
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
    size: 'default',
    status: 'normal',
  },
})

export const InnerText = styled('span', {
  oneLineClamp: true,
  mr: '$16',
  color: '$surface500',
})

export type StyledMessageVariants = VariantProps<typeof SelectTrigger>

export interface SelectTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  state: SelectState
  select: UseSelectReturn
  isDisabled?: boolean
  isLoading?: boolean
  status?: 'normal' | 'error' | 'success'
  placeholder?: string
  label?: string
  fallbackLabel?: string
  items: any[]
  labelKey?: string
}

export function SelectTrigger(props: SelectTriggerProps) {
  const {
    state,
    select,
    isDisabled,
    isLoading,
    label,
    placeholder,
    items,
    ...rest
  } = props

  return (
    <StyledButton
      isDisabled={isDisabled} // for disabled variant style
      disabled={isDisabled || isLoading} // native way to disable the button
      type="button" // prevent unwanted form submits within <form>
      {...rest}
      {...select.referenceProps}>
      <InnerText
        css={{
          color: label ? '$textDark' : '',
        }}>
        {label ?? placeholder}
      </InnerText>
      {isLoading ? (
        <IconContainer>
          <Loader size="small" />
        </IconContainer>
      ) : (
        <CaretDownIcon isOpen={state.isOpen} />
      )}
    </StyledButton>
  )
}
