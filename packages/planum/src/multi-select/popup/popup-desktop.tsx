import { FloatingFocusManager, FloatingOverlay } from '@floating-ui/react'
import { motion } from 'framer-motion'

import { customScrollbar, styled } from '../../theme'
import { useSelectContext } from '../context'
import type { SelectPopupProps } from '../select.types'
import { PopupSearchInput } from './popup-search-input'

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
})

const StyledListWrapperWrapper = styled('div', customScrollbar, {
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
  props: React.PropsWithChildren<SelectPopupProps>,
) => {
  const { children, popupCss } = props
  const { select } = useSelectContext()

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
      <FloatingFocusManager context={select.context} modal={false}>
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
          <PopupSearchInput />
          <StyledListWrapperWrapper role="listbox" id={select.listboxId}>
            {children}
          </StyledListWrapperWrapper>
        </StyledSelectPopupDesktop>
      </FloatingFocusManager>
    </FloatingOverlay>
  )
}
