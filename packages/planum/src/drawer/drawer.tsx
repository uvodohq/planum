import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from '@floating-ui/react-dom-interactions'
import { AnimatePresence, motion } from 'framer-motion'
import { cloneElement } from 'react'

import {
  StyledDrawerContainer,
  StyledDrawerContainerInner,
  UnderlayCover,
} from './drawer.styles'
import type { DrawerProps } from './use-drawer'
import useDrawer from './use-drawer'

export const Drawer = (props: DrawerProps) => {
  const { trigger, children } = props

  const {
    getReferenceProps,
    getFloatingProps,
    reference,
    floating,
    labelId,
    descriptionId,
    context,
    isOpen,
    close,
  } = useDrawer(props)

  return (
    <>
      {cloneElement(
        trigger,
        getReferenceProps({
          ref: reference,
          'data-open': isOpen,
          ...trigger.props,
        }),
      )}
      <FloatingPortal id="planum-portal">
        <AnimatePresence>
          {isOpen && (
            <FloatingOverlay
              lockScroll
              style={{
                isolation: 'isolate',
                position: 'fixed',
                zIndex: 999,
              }}>
              <UnderlayCover
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 300,
                }}
                data-id="UNDERLAY"
              />
              <FloatingFocusManager context={context}>
                <StyledDrawerContainer
                  {...getFloatingProps({
                    ref: floating,
                    'aria-labelledby': labelId,
                    'aria-describedby': descriptionId,
                  })}
                  data-id="DRAWER-CONTAINER">
                  <StyledDrawerContainerInner
                    as={motion.div as any}
                    data-id="DRAWER-INNER"
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{
                      type: 'tween',
                      damping: 60,
                      stiffness: 600,
                    }}>
                    {children({
                      close,
                      labelId,
                      descriptionId,
                    })}
                  </StyledDrawerContainerInner>
                </StyledDrawerContainer>
              </FloatingFocusManager>
            </FloatingOverlay>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  )
}
