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

const StyledSelectPopupDesktop = styled('div', {
  margin: '0',
  boxSizing: 'border-box',
  listStyleType: 'none',
  overflow: 'hidden',
  outline: 0,
  userSelect: 'none',
  border: '1px solid $surface400',
  backgroundColor: '$white',
  borderRadius: '$sm',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  p: 8,
})

const StyledList = styled('ul', customScrollbar, {
  listStyleType: 'none',
  overflowY: 'scroll',
  maxHeight: 220,
  overscrollBehavior: 'contain',
  mr: -4, // scrollbar width
})

const desktopMotionConfig = {
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: {
    type: 'spring',
    damping: 30,
    stiffness: 600,
    mass: 0.5,
  },
}

export const DesktopPopup = (
  props: React.PropsWithChildren<SelectPopupProps>,
) => {
  const { children, popupCss, popupSearchCss } = props
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
      <FloatingFocusManager
        context={select.context}
        modal={false}
        initialFocus={searchable ? undefined : -1}>
        <StyledSelectPopupDesktop
          ref={select.floating}
          css={popupCss}
          as={motion.div}
          {...select.getFloatingProps()}
          aria-labelledby={select.buttonId}
          style={{
            position: select.strategy,
            top: select.y ?? 0,
            left: select.x ?? 0,
            zIndex: 1000,
          }}
          {...desktopMotionConfig}>
          {searchable && <PopupSearchInput css={popupSearchCss} />}
          <StyledList role="listbox" id={select.listboxId}>
            {isSearching ? (
              <Flex
                css={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  my: '$24',
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
        </StyledSelectPopupDesktop>
      </FloatingFocusManager>
    </FloatingOverlay>
  )
}
