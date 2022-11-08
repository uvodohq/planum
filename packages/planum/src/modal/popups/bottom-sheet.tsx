import {
  FloatingFocusManager,
  FloatingOverlay,
} from '@floating-ui/react-dom-interactions'
import { motion } from 'framer-motion'

import { styled } from '../theme'
import type { useModal, UseModalProps } from '../use-modal'
import type { ModalState } from '../use-modal-state'
import { Underlay } from './popups.styles'

const StyledMobileBottomSheet = styled('div', {
  outline: '0',
  overflowY: 'auto',
  '-webkit-overflow-scrolling': 'touch',
  overscrollBehavior: 'contain',
  pointerEvents: 'auto',
  zIndex: 2,
})

export const underlayVariants = {
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  hidden: { opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

const mobileBottomSheetMotion = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 200 },
  transition: {
    duration: 0.15,
  },
}

interface Props extends UseModalProps {
  children: React.ReactNode
  state: ModalState
  modal: ReturnType<typeof useModal>
}

export const BottomSheet = (props: Props) => {
  const { modal, children } = props
  const { getFloatingProps, floatingContext, strategy } = modal

  return (
    <FloatingOverlay
      lockScroll
      style={{
        isolation: 'isolate',
        position: 'fixed',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
      }}>
      <Underlay
        variants={underlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      />
      <FloatingFocusManager
        context={floatingContext}
        // focusing closing button on open, brokes animation. so disable close button focusing
        order={['floating', 'content']}>
        <StyledMobileBottomSheet
          as={motion.div}
          {...mobileBottomSheetMotion}
          {...getFloatingProps({
            style: {
              position: strategy,
              bottom: 0,
              left: 0,
              right: 0,
              top: 'auto',
              minWidth: '100%',
              zIndex: 902,
            },
          })}>
          {children}
        </StyledMobileBottomSheet>
      </FloatingFocusManager>
    </FloatingOverlay>
  )
}
