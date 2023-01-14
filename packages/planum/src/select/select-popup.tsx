/* eslint-disable unicorn/consistent-destructuring */
import {
  FloatingFocusManager,
  FloatingNode,
  FloatingOverlay,
  FloatingPortal,
} from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'

import type { CSS } from '../theme'
import { customScrollbar, styled } from '../theme'
import { SelectContext } from './select-context'

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
  maxHeight: 200,
  py: 8,
  px: 8,
  pr: 4, // + 4px scrollbar width = 8px
})

const StyledSelectPopupMobile = styled('div', customScrollbar, {
  outline: '0',
  backgroundColor: '$white',
  overflowY: 'auto',
  '-webkit-overflow-scrolling': 'touch',
  overscrollBehavior: 'contain',

  '& li:not(:last-child)': {
    mb: 8,
  },

  '& ul': {
    py: 24,
    px: 16,
  },
})

const Underlay = styled(motion.div, {
  position: 'fixed',
  zIndex: 1,
  inset: 0,
  background: 'rgba(38, 38, 38, 0.4)',
  pointerEvents: 'auto',
})

const StyledList = styled('ul', {
  m: 0,
  p: 0,
})

const underlayVariants = {
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  hidden: { opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

interface SelectPopupProps {
  children: React.ReactNode
  popupCss?: CSS
}

export default function SelectPopup(props: SelectPopupProps) {
  const { children, popupCss } = props
  const { state, select } = useContext(SelectContext)

  const { x, y, strategy, direction, nodeId } = select

  const isMobile = window.matchMedia('(max-width: 768px)').matches
  const Popup = isMobile ? StyledSelectPopupMobile : StyledSelectPopupDesktop

  const style = isMobile
    ? {
        position: strategy,
        bottom: 0,
        left: 0,
        right: 0,
        top: 'auto',
        minWidth: '100%',
        zIndex: 902,
        maxHeight: '80%',
      }
    : {
        position: strategy,
        top: y ?? 0,
        left: x ?? 0,
        zIndex: 1000,
      }

  const motionConfig = isMobile
    ? {
        initial: { opacity: 0, y: 200 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 200 },
        transition: {
          duration: 0.2,
        },
      }
    : {
        initial: { opacity: 0, y: 6 * direction },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 6 * direction },
        transition: {
          type: 'spring',
          damping: 30,
          stiffness: 600,
          mass: 0.5,
        },
      }

  return (
    <FloatingNode id={nodeId}>
      <FloatingPortal id="planum-select-portal">
        <AnimatePresence>
          {state.isOpen && (
            <FloatingOverlay
              lockScroll={isMobile}
              style={{
                isolation: 'isolate',
                position: 'fixed',
                zIndex: 999,
                display: 'flex',
                justifyContent: 'center',
              }}>
              {isMobile && (
                <Underlay
                  variants={underlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                />
              )}
              <FloatingFocusManager
                context={select.context}
                initialFocus={-1}
                modal={false}>
                <Popup
                  css={popupCss}
                  {...select.getFloatingProps({
                    style,
                  })}
                  as={motion.div}
                  {...motionConfig}>
                  <StyledList>{children}</StyledList>
                </Popup>
              </FloatingFocusManager>
            </FloatingOverlay>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </FloatingNode>
  )
}
