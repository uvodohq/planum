import { FloatingNode, FloatingPortal } from '@floating-ui/react'
import { AnimatePresence } from 'framer-motion'
import { useContext } from 'react'

import { useMediaQuery } from '../hooks'
import type { CSS } from '../theme'
import { SelectContext } from './select-context'
import { DesktopPopup } from './select-popup-desktop'
import { MobilePopup } from './select-popup-mobile'

interface SelectPopupProps {
  children: React.ReactNode
  popupCss?: CSS
}

export function SelectPopup(props: SelectPopupProps) {
  const { children, popupCss } = props
  const { state, select } = useContext(SelectContext)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const Popup = isMobile ? MobilePopup : DesktopPopup

  return (
    <FloatingNode id={select.nodeId}>
      <FloatingPortal id="planum-portal">
        <AnimatePresence>
          {state.isOpen && <Popup {...{ select, popupCss }}>{children}</Popup>}
        </AnimatePresence>
      </FloatingPortal>
    </FloatingNode>
  )
}
