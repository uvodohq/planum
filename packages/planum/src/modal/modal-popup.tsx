import { FloatingPortal } from '@floating-ui/react-dom-interactions'
import { AnimatePresence } from 'framer-motion'

import { useMediaQuery } from '~/hooks'

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
}

export const ModalPopup = (props: PopupProps) => {
  const {
    state,
    modal,
    children,
    openOnMobileAs,
    initialFocus,
    onCloseAnimationEnd,
  } = props
  const isMobile = useMediaQuery('(max-width: 768px)')
  const Popup = isMobile
    ? openOnMobileAs === 'drawer'
      ? Drawer
      : BottomSheet
    : DesktopPopup

  return (
    <FloatingPortal id="planum-portal">
      <AnimatePresence>
        {state.isOpen && (
          <Popup
            modal={modal}
            state={state}
            initialFocus={initialFocus}
            onCloseAnimationEnd={onCloseAnimationEnd}>
            {children}
          </Popup>
        )}
      </AnimatePresence>
    </FloatingPortal>
  )
}
