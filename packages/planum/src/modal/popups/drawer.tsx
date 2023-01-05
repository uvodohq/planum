import { FloatingFocusManager, FloatingOverlay } from '@floating-ui/react'
import { motion } from 'framer-motion'

import { styled } from '../../theme'
import type { useModal, UseModalProps } from '../use-modal'
import type { ModalState } from '../use-modal-state'
import { floatingOverlayCss, StyledModalDrawer } from './popups.styles'

const StyledDrawerMotion = styled(motion.div, {
  outline: '0',
  overflowY: 'auto',
  '-webkit-overflow-scrolling': 'touch',
  overscrollBehavior: 'contain',
  pointerEvents: 'auto',
  bg: '#fff',
  width: '100%',
  height: '100%',
  zIndex: 2,
})

const modalVariants = {
  initial: {
    // opacity: 0,
    x: '100%',
    transition: {
      duration: 0.1,
    },
  },
  animate: {
    // opacity: 1,
    x: '0%',
    transition: {
      ease: 'easeOut',
      duration: 0.1,
    },
  },
  exit: {
    // opacity: 0,
    x: '100%',
    transition: {
      ease: 'easeIn',
      duration: 0.1,
    },
  },
}

interface ModalProps extends UseModalProps {
  children: React.ReactNode
  state: ModalState
  modal: ReturnType<typeof useModal>
}

export const Drawer = (props: ModalProps) => {
  const { modal, children } = props
  const { getFloatingProps, floatingContext, strategy } = modal

  return (
    <FloatingOverlay
      lockScroll
      className={floatingOverlayCss()}
      onClick={(e: any) => e.stopPropagation()}>
      <FloatingFocusManager
        context={floatingContext}
        // focusing closing button on open, brokes animation. so disable close button focusing
        order={['floating', 'content']}>
        <StyledModalDrawer
          {...getFloatingProps({
            style: {
              position: strategy,
            },
          })}>
          <StyledDrawerMotion
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit">
            {children}
          </StyledDrawerMotion>
        </StyledModalDrawer>
      </FloatingFocusManager>
    </FloatingOverlay>
  )
}
