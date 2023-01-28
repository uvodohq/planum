import { FloatingFocusManager, FloatingOverlay } from '@floating-ui/react'
import { customScrollbar, styled } from '@uvodohq/planum'
import { motion } from 'framer-motion'

import type { PhonePopupProps } from '../phone.types'
import { usePhoneContext } from '../phone-context'
import { PopupSearchInput } from './phone-popup-search-input'

const StyledPhonePopupDesktop = styled('div', {
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
})

const StyledList = styled('ul', customScrollbar, {
  listStyleType: 'none',
  overflowY: 'scroll',
  maxHeight: 220,
  overscrollBehavior: 'contain',
  mr: -4, // scrollbar width
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
  props: React.PropsWithChildren<PhonePopupProps>,
) => {
  const { children, popupCss } = props
  const { phone, state } = usePhoneContext()
  const { searchable } = state

  return (
    <FloatingOverlay
      lockScroll
      style={{
        isolation: 'isolate',
        position: 'fixed',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        overflow: 'hidden',
      }}>
      <FloatingFocusManager
        context={phone.context}
        modal={false}
        initialFocus={searchable ? undefined : -1}>
        <StyledPhonePopupDesktop
          ref={phone.floating}
          css={popupCss}
          as={motion.div}
          {...phone.getFloatingProps()}
          aria-labelledby={phone.buttonId}
          style={{
            position: phone.strategy,
            top: phone.y ?? 0,
            left: phone.x ?? 0,
            zIndex: 1000,
          }}
          {...desktopMotionConfig}>
          {searchable && <PopupSearchInput />}
          <StyledList role="listbox" id={phone.listboxId}>
            {children}
          </StyledList>
        </StyledPhonePopupDesktop>
      </FloatingFocusManager>
    </FloatingOverlay>
  )
}
