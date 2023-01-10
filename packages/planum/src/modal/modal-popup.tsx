import type { FloatingContext, ReferenceType } from '@floating-ui/react'
import {
  FloatingPortal,
  useTransitionStatus,
  useTransitionStyles,
} from '@floating-ui/react'
import { AnimatePresence } from 'framer-motion'

import { useMediaQuery } from '../hooks'
import { BottomSheet } from './popups/bottom-sheet'
import { DesktopPopup } from './popups/desktop-popup'
import { Drawer } from './popups/drawer'
import type { useModal, UseModalProps } from './use-modal'
import type { ModalState } from './use-modal-state'

interface PopupProps extends UseModalProps {
  children: React.ReactNode
  state: ModalState
  modal: ReturnType<typeof useModal>
  openOnMobileAs?: 'bottomsheet' | 'drawer'
  initialFocus?: number | React.MutableRefObject<HTMLElement | null>
  onCloseAnimationEnd?: () => void
  context: FloatingContext<ReferenceType>
}

export const ModalPopup = (props: PopupProps) => {
  const {
    state,
    modal,
    children,
    openOnMobileAs,
    initialFocus,
    onCloseAnimationEnd,
    context,
  } = props
  const isMobile = useMediaQuery('(max-width: 768px)')

  const Popup = isMobile
    ? openOnMobileAs === 'drawer'
      ? Drawer
      : BottomSheet
    : DesktopPopup

  // const { isMounted, status } = useTransitionStatus(context)

  const { styles, isMounted } = useTransitionStyles(context, {
    initial: {
      opacity: 0,
      scale: 0.75,
    },
    open: {
      opacity: 1,
      scale: 1,
      background: 'yellow',
    },
    close: {
      background: 'green',
      opacity: 0,
      scale: 0.96,
    },
    duration: 800,
  })

  // initial: {
  //   opacity: 0,
  //   scale: 0.75,
  //   transition: {
  //     duration: 0.8,
  //   },
  // },
  // animate: {
  //   opacity: 1,
  //   scale: 1,
  //   transition: {
  //     ease: 'easeOut',
  //     duration: 0.8,
  //   },
  // },
  // exit: {
  //   opacity: 0,
  //   scale: 0.96,
  //   transition: {
  //     ease: 'easeIn',
  //     duration: 0.8,
  //   },
  // },

  return (
    <FloatingPortal id="planum-portal">
      {/* <AnimatePresence> */}
      {(state.isOpen || isMounted) && (
        <Popup
          modal={modal}
          state={state}
          initialFocus={initialFocus}
          onCloseAnimationEnd={onCloseAnimationEnd}
          styles={styles}>
          {children}
        </Popup>
      )}
      {/* </AnimatePresence> */}
    </FloatingPortal>
  )
}
