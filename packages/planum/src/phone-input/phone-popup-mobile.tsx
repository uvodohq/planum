import { FloatingFocusManager, FloatingOverlay } from '@floating-ui/react'
import { motion } from 'framer-motion'

import type { CSS } from '../theme'
import { customScrollbar, styled } from '../theme'
import { PopupSearchInput } from './phone-popup-search-input'
import type { UseSelectReturn } from './use-phone'

const StyledSelectPopupMobile = styled('div', {
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
        context={select.context}
        modal={false}
        initialFocus={select.searchable ? undefined : -1}
        returnFocus={false}>
        <StyledSelectPopupMobile
          ref={select.floating}
          as={motion.div}
          aria-labelledby={select.buttonId}
          css={popupCss}
          {...mobileMotionConfig}
          {...select.getFloatingProps()}
          style={{
            position: select.strategy,
            bottom: 0,
            left: 0,
            right: 0,
            top: 'auto',
            minWidth: '100%',
            zIndex: 902,
            height: select.searchable ? '80%' : 'auto',
            paddingTop: select.searchable ? 0 : undefined,
          }}>
          {select.searchable && (
            <StyledSearchWrapper>
              <PopupSearchInput select={select} />
            </StyledSearchWrapper>
          )}
          <StyledList
            role="listbox"
            id={select.listboxId}
            style={{
              maxHeight: select.searchable ? 'calc(100% - 72px)' : '100%',
              paddingTop: select.searchable ? 0 : undefined,
            }}>
            {children}
          </StyledList>
        </StyledSelectPopupMobile>
      </FloatingFocusManager>
    </FloatingOverlay>
  )
}
