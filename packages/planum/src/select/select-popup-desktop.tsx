import { FloatingFocusManager } from '@floating-ui/react'
import { motion } from 'framer-motion'

import type { CSS } from '../theme'
import { customScrollbar, styled } from '../theme'
import type { UseSelectReturn } from './use-select'

const StyledSelectPopupDesktop = styled('div', customScrollbar, {
  margin: '0',
  boxSizing: 'border-box',
  listStyleType: 'none',
  overflowY: 'scroll',
  outline: '0',
  userSelect: 'none',
  border: '1px solid $surface400',
  backgroundColor: '$white',
  borderRadius: '$sm',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  py: 8,
  px: 8,
  pr: 4, // + 4px scrollbar width = 8px
})

interface SelectPopupProps {
  children: React.ReactNode
  popupCss?: CSS
  select: UseSelectReturn
}

const desktopMotionConfig = {
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: {
    type: 'spring',
    damping: 30,
    stiffness: 600,
    mass: 0.5,
  },
}

export const DesktopPopup = (props: SelectPopupProps) => {
  const { children, select, popupCss } = props

  const floatinProps = select.getFloatingProps({
    style: {
      position: select.strategy,
      top: select.y ?? 0,
      left: select.x ?? 0,
      zIndex: 1000,
    },
  })

  return (
    <FloatingFocusManager
      context={select.context}
      initialFocus={-1}
      modal={false}>
      <StyledSelectPopupDesktop
        css={popupCss}
        as={motion.div}
        {...floatinProps}
        {...desktopMotionConfig}>
        <ul>{children}</ul>
      </StyledSelectPopupDesktop>
    </FloatingFocusManager>
  )
}
