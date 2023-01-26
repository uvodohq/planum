import { FloatingFocusManager } from '@floating-ui/react'
import { motion } from 'framer-motion'

import { customScrollbar, styled } from '../../theme'
import type { SelectPopupProps } from '../select.types'
import { useSelectContext } from '../select-context'
import { PopupSearchInput } from './select-popup-search-input'

const StyledSelectPopupDesktop = styled('div', {
  margin: '0',
  boxSizing: 'border-box',
  listStyleType: 'none',
  overflow: 'hidden',
  outline: 0,
  userSelect: 'none',
  border: '1px solid $surface400',
  backgroundColor: '$white',
  borderRadius: '$sm',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  p: 8,
  // pr: 4, // + 4px scrollbar width = 8px
})

const StyledList = styled('ul', customScrollbar, {
  listStyleType: 'none',
  overflowY: 'scroll',
  maxHeight: 220,
  overscrollBehavior: 'contain',
})

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

export const DesktopPopup = (
  props: React.PropsWithChildren<SelectPopupProps>,
) => {
  const { children, popupCss } = props
  const { select, state } = useSelectContext()
  const { searchable } = state

  return (
    <FloatingFocusManager
      context={select.context}
      modal={false}
      initialFocus={searchable ? undefined : -1}>
      <StyledSelectPopupDesktop
        ref={select.floating}
        css={popupCss}
        as={motion.div}
        {...select.getFloatingProps()}
        aria-labelledby={select.buttonId}
        style={{
          position: select.strategy,
          top: select.y ?? 0,
          left: select.x ?? 0,
          zIndex: 1000,
        }}
        {...desktopMotionConfig}>
        {searchable && <PopupSearchInput />}
        <StyledList role="listbox" id={select.listboxId}>
          {children}
        </StyledList>
      </StyledSelectPopupDesktop>
    </FloatingFocusManager>
  )
}
