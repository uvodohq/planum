import { FloatingFocusManager, FloatingOverlay } from '@floating-ui/react'
import { motion } from 'framer-motion'

import type { CSS } from '../theme'
import { customScrollbar, styled } from '../theme'
import type { UseSelectReturn } from './use-select'

const StyledSelectPopupMobile = styled('div', customScrollbar, {
  outline: '0',
  backgroundColor: '$white',
  overflowY: 'auto',
  '-webkit-overflow-scrolling': 'touch',
  overscrollBehavior: 'contain',
  maxHeight: '80% !important',

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

const underlayVariants = {
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  hidden: { opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

interface SelectPopupProps {
  children: React.ReactNode
  popupCss?: CSS
  select: UseSelectReturn
}

const mobileMotionConfig = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 200 },
  transition: {
    duration: 0.2,
  },
}

export const MobilePopup = (props: SelectPopupProps) => {
  const { children, select, popupCss } = props

  const floatingProps = select.getFloatingProps({
    style: {
      position: select.strategy,
      bottom: 0,
      left: 0,
      right: 0,
      top: 'auto',
      minWidth: '100%',
      zIndex: 902,
    },
  })

  return (
    <FloatingOverlay
      lockScroll
      style={{
        isolation: 'isolate',
        position: 'fixed',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Underlay
        variants={underlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      />
      <FloatingFocusManager
        context={select.context}
        initialFocus={-1}
        modal={false}>
        <StyledSelectPopupMobile
          as={motion.div}
          css={popupCss}
          {...mobileMotionConfig}
          {...floatingProps}>
          <ul>{children}</ul>
        </StyledSelectPopupMobile>
      </FloatingFocusManager>
    </FloatingOverlay>
  )
}
