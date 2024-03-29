import type { SelectProps } from '@uvodohq/planum'
import { Select, styled, subheaderCss } from '@uvodohq/planum'
import { UserIcon } from '@uvodohq/planum-icons'

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
  props?: Partial<SelectProps>,
) {
  return (
    <Select
      labelKey="name"
      renderTrigger={(triggerProps) => {
        const { label, ...rest } = triggerProps
        return (
          <StyledButton {...rest}>
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
