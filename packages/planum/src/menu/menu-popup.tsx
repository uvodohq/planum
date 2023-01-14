import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { styled } from '../theme'
import type { UseMenuReturn } from './use-menu'
import type { UseMenuState } from './use-menu-state'

const StyledDesktopPopup = styled('div', {
  outline: '0',
  border: '1px solid $surface200',
  backgroundColor: '$white',
  borderRadius: '$sm',
  boxShadow: '$sm',
  overflow: 'hidden',
  padding: 8,
  pointerEvents: 'auto',
})

const StyledMobilePopup = styled('div', {
  outline: '0',
  backgroundColor: '$white',
  overflowY: 'auto',
  '-webkit-overflow-scrolling': 'touch',
  overscrollBehavior: 'contain',
  py: 24,
  px: 16,
  pointerEvents: 'auto',

  '& li:not(:last-child)': {
    mb: 8,
  },
})

const Underlay = styled(motion.div, {
  position: 'fixed',
  zIndex: 1,
  inset: 0,
  background: 'rgba(38, 38, 38, 0.4)',
  pointerEvents: 'auto',
})

const underlayVariants = {
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  hidden: { opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

const StyledList = styled('ul', {
  p: 0,
  m: 0,
})

interface PopupProps {
  state: UseMenuState
  menu: UseMenuReturn
}

export const DropdownPopup = (props: PopupProps) => {
  const { state, menu } = props

  const { x, y, floating, strategy, context, placement } = menu.floating

  const menus = state.open ? menu.renderMenuItems() : null
  const direction = placement === 'bottom' ? 1 : -1
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  const Popup = isMobile ? StyledMobilePopup : StyledDesktopPopup
  const style = isMobile
    ? {
        position: strategy,
        bottom: 0,
        left: 0,
        right: 0,
        top: 'auto',
        minWidth: '100%',
        zIndex: 902,
      }
    : { position: strategy, top: y ?? 0, left: x ?? 0, zIndex: 902 }

  const motionConfig = isMobile
    ? {
        initial: { opacity: 0, y: 200 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 200 },
        transition: {
          duration: 0.15,
        },
      }
    : {
        initial: { opacity: 0, y: -6 * direction },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 * direction },
        transition: {
          type: 'spring',
          damping: 30,
          stiffness: 600,
        },
      }

  return (
    <FloatingPortal id="planum-menu-portal">
      <AnimatePresence>
        {state.open && (
          <FloatingOverlay
            lockScroll={isMobile}
            style={{
              isolation: 'isolate',
              position: 'fixed',
              zIndex: 999,
              display: 'flex',
              justifyContent: 'center',
            }}
            onClick={(e: any) => e.stopPropagation()}>
            {isMobile && (
              <Underlay
                variants={underlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />
            )}
            <FloatingFocusManager
              context={context}
              preventTabbing
              order={['reference', 'content']}>
              <Popup
                {...menu.interactions.getFloatingProps({
                  ref: floating,
                  style,
                })}
                as={motion.div}
                {...motionConfig}>
                <StyledList>{menus}</StyledList>
              </Popup>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </AnimatePresence>
    </FloatingPortal>
  )
}
