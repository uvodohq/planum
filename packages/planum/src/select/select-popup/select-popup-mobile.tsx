import { FloatingFocusManager, FloatingOverlay } from '@floating-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { useUpdateEffect } from '../..'
import { Box, Flex } from '../../layout'
import { Loader } from '../../loader'
import { customScrollbar, styled } from '../../theme'
import type { SelectPopupProps } from '../select.types'
import { useSelectContext } from '../select-context'
import { PopupSearchInput } from './select-popup-search-input'

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

const mobileMotionConfig = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 200 },
  transition: {
    duration: 0.2,
  },
}

export const MobilePopup = (
  props: React.PropsWithChildren<SelectPopupProps>,
) => {
  const { children, popupCss } = props
  const { select, state } = useSelectContext()
  const {
    searchable,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isSearching,
  } = state

  const infiniteScrollRef = useRef(null)
  const isInView = useInView(infiniteScrollRef, {
    once: !hasNextPage,
    margin: '50px',
  })

  useUpdateEffect(() => {
    if (isInView && !isFetchingNextPage) {
      fetchNextPage?.()
    }
  }, [isInView])

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
        initialFocus={searchable ? undefined : -1}>
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
            height: searchable ? '80%' : 'auto',
            paddingTop: searchable ? 0 : undefined,
          }}>
          {searchable && (
            <StyledSearchWrapper>
              <PopupSearchInput />
            </StyledSearchWrapper>
          )}
          <StyledList
            role="listbox"
            id={select.listboxId}
            style={{
              maxHeight: searchable ? 'calc(100% - 72px)' : '100%',
              paddingTop: searchable ? 0 : undefined,
            }}>
            {isSearching ? (
              <Flex
                css={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  my: '$16',
                }}>
                <Loader />
              </Flex>
            ) : (
              children
            )}
            {hasNextPage && (
              <Box
                ref={infiniteScrollRef}
                css={{
                  dflex: 'center',
                  pt: 60,
                  mt: -50,
                  pb: 10,
                  disableActions: true,
                }}>
                {isFetchingNextPage && hasNextPage && <Loader />}
              </Box>
            )}
          </StyledList>
        </StyledSelectPopupMobile>
      </FloatingFocusManager>
    </FloatingOverlay>
  )
}
