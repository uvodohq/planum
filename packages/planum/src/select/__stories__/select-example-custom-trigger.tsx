import { styled } from '@stitches/react'
import type { SVGProps } from 'react'

import { subheaderCss } from '../../text'
import type { SelectProps } from '../select'
import { Select } from '../select'

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

interface UserIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}
function UserIcon(props: UserIconProps) {
  const { size } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 16}
      height={size || 16}
      viewBox="0 0 256 256"
      {...props}>
      <path
        fill="currentColor"
        d="M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z"></path>
    </svg>
  )
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
