import { forwardRef } from 'react'

import { Flex } from '../layout'
import { Paragraph, paragraphCss } from '../text'
import type { CSS } from '../theme'
import { styled } from '../theme'

const StyledMenuItem = styled('li', paragraphCss, {
  display: 'flex',
  width: '100%',
  border: 'none',
  borderRadius: '$sm',
  minWidth: 100,
  margin: '0',
  outline: '0',
  padding: 8,
  color: '$textDark',
  fontWeight: '$semibold',
  transition: 'background-color 0.2s ease-in-out',
  cursor: 'pointer',
  pointerEvents: 'auto',
  whiteSpace: 'nowrap',

  '&:focus, &:not([disabled]):active': {
    backgroundColor: '$surface100',
  },

  '&[data-disabled]': {
    opacity: 0.5,
  },
})

const StyledIcon = styled('span', {
  dflex: 'center',
})

export interface MenuItemProps {
  icon?: React.ReactNode
  label: string
  css?: CSS
  iconCss?: CSS
  disabled?: boolean
  onSelect?: () => void
}

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  (props, ref) => {
    // @ts-expect-error dont expose internal closeMenu
    const { label, icon, disabled, closeMenu, onSelect, iconCss, ...rest } =
      props

    function onChoose(e: any) {
      e.stopPropagation()
      closeMenu?.()
      onSelect?.()
    }

    return (
      <StyledMenuItem
        {...rest}
        onClick={onChoose}
        tabIndex={0}
        ref={ref}
        role="menuitem"
        data-disabled={disabled}>
        <Flex css={{ gap: 4, alignItems: 'center' }}>
          <StyledIcon css={iconCss}>{icon}</StyledIcon>
          <Paragraph>{label}</Paragraph>
        </Flex>
      </StyledMenuItem>
    )
  },
)

MenuItem.displayName = 'MenuItem'
