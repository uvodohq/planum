import { styled } from '@stitches/react'

import { UserIcon } from '../icons'
import type { SelectProps } from '../select'
import Select from '../select'
import { subheaderCss } from '../text'

const StyledButton = styled('button', subheaderCss, {
  fw: '$regular',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  userSelect: 'none',
  width: '100%',
  maxWidth: '100%',
  transition: 'border-color 0.15s, box-shadow 0.15s',
  overflow: 'hidden',
  cursor: 'pointer',
  fontWeight: '$regular',
  border: '1px solid $surface400',
  outline: 'none',
  backgroundColor: '$surface100',
  borderColor: '$surface200',
  color: '$textDark',
  height: '$48',
  borderRadius: '$sm',
  padding: '$8 $16',

  '&:hover': {
    backgroundColor: '$surface200',
    borderColor: '$surface300',
  },

  '&:focus': {
    borderColor: '$surface600',
    boxShadow: '0 0 0 3px $colors$surface100',
  },
})

export const LeftIconWrapper = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '$4',
})

interface WeightUnit {
  id: number
  name: string
}

export default function SelectExampleCustomTrigger(
  props?: Partial<SelectProps<WeightUnit>>,
) {
  return (
    <Select
      labelKey="name"
      renderTrigger={(triggerProps) => {
        const { state, items, labelKey, select } = triggerProps
        const index = state.selectedIndex ?? ''
        const label = items[index]?.[labelKey]

        return (
          <StyledButton {...triggerProps} {...select.referenceProps}>
            <LeftIconWrapper>
              <UserIcon />
            </LeftIconWrapper>
            Sort by {label}
          </StyledButton>
        )
      }}
      {...props}
    />
  )
}
