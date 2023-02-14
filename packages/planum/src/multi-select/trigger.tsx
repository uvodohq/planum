import type { HTMLAttributes } from 'react'

import { Box } from '../layout'
import { Loader } from '../loader'
import { subheaderCss } from '../text'
import type { VariantProps } from '../theme'
import { styled } from '../theme'
import { useSelectContext } from './context'
import { IconContainer, SelectDownIcon } from './icons'
import type { SelectTriggerProps } from './select.types'

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

    isOpen: {
      true: {
        backgroundColor: '$surface50',
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
  mr: '$16',
  color: '$surface500',
  oneLineClamp: true,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
})

export type StyledMessageVariants = VariantProps<typeof SelectTrigger>

type Props = SelectTriggerProps & HTMLAttributes<HTMLButtonElement>

export function SelectTrigger(props: Props) {
  const {
    status,
    placeholder,
    isDisabled,
    isLoading,
    fallbackLabel,
    fieldProps,
    renderTrigger,
    ...rest
  } = props

  const { select, state } = useSelectContext()

  const { buttonId, reference, getReferenceProps } = select
  const { isOpen, value, selectedItemsMap } = state

  const selectedItems = [...selectedItemsMap.values()].flat()

  const limit = 5
  const shownItems = selectedItems
    .slice(0, limit)
    .map((item) => item.name)
    .join(', ')

  const hiddenItemsCount =
    selectedItems.length > limit ? `+${selectedItems.length - limit} more` : ''
  const selectedLabel = shownItems

  // show fallback label if options not loaded yet
  const label = selectedLabel || (value ? fallbackLabel : undefined)

  const triggerProps = {
    id: buttonId,
    ref: reference,
    status,
    disabled: isDisabled || isLoading, // native way to disable the button
    'aria-label': label,
    'aria-autocomplete': 'none' as any,
    'data-open': isOpen,
    ...rest,
    ...fieldProps,
    ...getReferenceProps(),
  }

  if (typeof renderTrigger === 'function') {
    return renderTrigger({ ...triggerProps, label })
  }

  return (
    <StyledButton
      {...triggerProps}
      isOpen={isOpen}
      isDisabled={isDisabled} // for disabled variant style
      type="button" // prevent unwanted form submits within <form>
      // The default role for the reference using a "listbox"
      // is a "combobox", but Safari has a bug with VoiceOver
      role={undefined}>
      <InnerText
        css={{
          color: label ? '$textDark' : '',
        }}>
        {label ? (
          <>
            <Box as="span" css={{ oneLineClamp: true }}>
              {label}
            </Box>
            {hiddenItemsCount}
          </>
        ) : (
          placeholder
        )}
      </InnerText>
      {isLoading ? (
        <IconContainer>
          <Loader size="small" />
        </IconContainer>
      ) : (
        <SelectDownIcon isOpen={isOpen} />
      )}
    </StyledButton>
  )
}
