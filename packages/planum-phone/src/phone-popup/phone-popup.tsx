import { FloatingNode, FloatingPortal } from '@floating-ui/react'
import { useTabletMedia } from '@uvodohq/planum'
import { AnimatePresence } from 'framer-motion'
import { useMemo } from 'react'

import type { PhonePopupProps } from '../phone.types'
import { usePhoneContext } from '../phone-context'
import { PhoneEmptyContent } from '../phone-empty-content'
import { Option } from '../phone-option'
import { DesktopPopup } from './phone-popup-desktop'
import { MobilePopup } from './phone-popup-mobile'

export function PhonePopup(props: React.PropsWithChildren<PhonePopupProps>) {
  const { renderEmpty, popupCss, popupSearchCss } = props
  const { phone, state } = usePhoneContext()
  const isTablet = useTabletMedia()
  const Popup = isTablet ? DesktopPopup : MobilePopup

  const { isEmpty, options, nodeId } = phone
  const { isOpen } = state

  const popupContent = useMemo(() => {
    if (!isOpen) return null
    if (isEmpty) return <PhoneEmptyContent renderEmpty={renderEmpty} />

    return options.map((item, index) => (
      <Option key={item.id} index={index} item={item} />
    ))
  }, [isEmpty, isOpen, options, renderEmpty])

  return (
    <FloatingNode id={nodeId}>
      <FloatingPortal id="planum-portal">
        <AnimatePresence>
          {isOpen && (
            <Popup popupCss={popupCss} popupSearchCss={popupSearchCss}>
              {popupContent}
            </Popup>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </FloatingNode>
  )
}
