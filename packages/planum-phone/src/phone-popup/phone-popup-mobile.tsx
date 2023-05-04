import { FloatingFocusManager, FloatingOverlay } from '@floating-ui/react'
import { customScrollbar, styled } from '@uvodohq/planum'
import { motion } from 'framer-motion'

import type { PhonePopupProps } from '../phone.types'
import { usePhoneContext } from '../phone-context'
import { PopupSearchInput } from './phone-popup-search-input'

const StyledPhonePopupMobile = styled('div', {
  outline: 0,
  backgroundColor: '$white',
  height: '80%',
  maxHeight: '80% !important',

  '& li:not(:last-child)': {
    mb: 8,
  },

  '& ul': {
    py: 24,
    px: 16,
  },
})

const StyledSearchWrapper = styled('div', {
  px: 16,
  pt: 16,
  pb: 8,
})

const StyledList = styled('ul', customScrollbar, {
  listStyleType: 'none',
  overflowY: 'scroll',
  overscrollBehavior: 'contain',
  '-webkit-overflow-scrolling': 'touch',
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

const mobileMotionConfig = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 200 },
  transition: {
    duration: 0.2,
  },
}

export const MobilePopup = (
  props: React.PropsWithChildren<PhonePopupProps>,
) => {
  const { children, popupCss } = props
  const { phone } = usePhoneContext()

  return (
    <FloatingOverlay
      lockScroll
      style={{
        isolation: 'isolate',
        position: 'fixed',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        overflow: 'hidden',
      }}>
      <Underlay
        variants={underlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      />
      <FloatingFocusManager
        context={phone.context}
        modal={false}
        initialFocus={undefined}>
        <StyledPhonePopupMobile
          ref={phone.floating}
          as={motion.div}
          aria-labelledby={phone.buttonId}
          css={popupCss}
          {...mobileMotionConfig}
          {...phone.getFloatingProps()}
          style={{
            position: phone.strategy,
            bottom: 0,
            left: 0,
            right: 0,
            top: 'auto',
            minWidth: '100%',
            zIndex: 902,
            height: '80%',
            paddingTop: 0,
          }}>
          <StyledSearchWrapper>
            <PopupSearchInput />
          </StyledSearchWrapper>
          <StyledList
            role="listbox"
            id={phone.listboxId}
            style={{
              maxHeight: 'calc(100% - 72px)',
              paddingTop: 0,
            }}>
            {children}
          </StyledList>
        </StyledPhonePopupMobile>
      </FloatingFocusManager>
    </FloatingOverlay>
  )
}
