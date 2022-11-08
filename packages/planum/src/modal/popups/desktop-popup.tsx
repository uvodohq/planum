import {
  FloatingFocusManager,
  FloatingOverlay,
} from '@floating-ui/react-dom-interactions'

import type { useModal, UseModalProps } from '../use-modal'
import type { ModalState } from '../use-modal-state'
import {
  floatingOverlayCss,
  Spacer,
  StyledModalDesktop,
  StyledModalInnerDesktop,
  Underlay,
} from './popups.styles'

const modalVariants = {
  initial: {
    opacity: 0,
    scale: 0.75,
    transition: {
      duration: 0.1,
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: {
      ease: 'easeIn',
      duration: 0.1,
    },
  },
}

const underlayVariants = {
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  hidden: { opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

interface Props extends UseModalProps {
  children: React.ReactNode
  state: ModalState
  modal: ReturnType<typeof useModal>
  initialFocus?: number | React.MutableRefObject<HTMLElement | null>
  onCloseAnimationEnd?: () => void
}

export const DesktopPopup = (props: Props) => {
  const { modal, children, initialFocus, onCloseAnimationEnd } = props
  const { getFloatingProps, floatingContext } = modal

  return (
    <FloatingOverlay lockScroll className={floatingOverlayCss()}>
      <Underlay
        variants={underlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      />
      <FloatingFocusManager
        context={floatingContext}
        initialFocus={initialFocus}>
        <StyledModalDesktop {...getFloatingProps()}>
          <Spacer />
          <StyledModalInnerDesktop
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={(definition) => {
              if (definition === 'exit') {
                onCloseAnimationEnd?.()
              }
            }}>
            {children}
          </StyledModalInnerDesktop>
          <Spacer />
        </StyledModalDesktop>
      </FloatingFocusManager>
    </FloatingOverlay>
  )
}
