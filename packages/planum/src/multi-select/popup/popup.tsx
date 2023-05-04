import { FloatingNode, FloatingPortal } from '@floating-ui/react'
import { AnimatePresence } from 'framer-motion'

import { useMediaQuery } from '../../hooks'
import { useSelectContext } from '../context'
import type { SelectPopupProps } from '../select.types'
import { DesktopPopup } from './popup-desktop'
import { MobilePopup } from './popup-mobile'

export function SelectPopup(props: React.PropsWithChildren<SelectPopupProps>) {
  const { children, popupCss } = props
  const { select, state } = useSelectContext()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const Popup = isMobile ? MobilePopup : DesktopPopup

  return (
    <FloatingNode id={select.nodeId}>
      <FloatingPortal id="planum-portal">
        <AnimatePresence>
          {state.isOpen && <Popup popupCss={popupCss}>{children}</Popup>}
        </AnimatePresence>
      </FloatingPortal>
    </FloatingNode>
  )
}
