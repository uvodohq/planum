import {
  FloatingFocusManager,
  FloatingNode,
  FloatingPortal,
} from '@floating-ui/react-dom-interactions'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'

import { customScrollbar, styled } from '../theme'
import { AutoCompleteContext } from './context'

const StyledPopup = styled('div', customScrollbar, {
  background: '#29282b',
  margin: '0',
  boxSizing: 'border-box',
  listStyleType: 'none',
  overflowY: 'scroll',
  outline: '0',
  userSelect: 'none',
  border: '1px solid $surface400',
  backgroundColor: '$white',
  borderRadius: '$sm',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  maxHeight: 200,
  py: 8,
  px: 8,
  pr: 4, // + 4px scrollbar width = 8px
})

interface PopupProps {
  children: React.ReactNode
}

export default function Popup(props: PopupProps) {
  const { children } = props
  const { state, autoComplete } = useContext(AutoCompleteContext)

  const {
    floating,
    strategy,
    x,
    y,
    context,
    placement,
    //
    nodeId,
    getFloatingProps,
  } = autoComplete

  const direction = placement === 'bottom' ? -1 : 1

  const floatingProps = getFloatingProps({
    ref: floating,
    style: {
      position: strategy,
      zIndex: 999,
      left: x ?? '',
      top: y ?? '',
      overflowY: 'scroll',
    },
  })

  return (
    <FloatingNode id={nodeId}>
      <FloatingPortal id="planum-autocomplete-portal">
        <AnimatePresence>
          {state.isOpen && (
            <FloatingFocusManager
              context={context}
              initialFocus={-1}
              modal={false}>
              <StyledPopup
                {...floatingProps}
                as={motion.div}
                initial={{ opacity: 0, y: 6 * direction }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 * direction }}
                transition={{
                  type: 'spring',
                  damping: 30,
                  stiffness: 600,
                  mass: 0.5,
                }}>
                {children}
              </StyledPopup>
            </FloatingFocusManager>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </FloatingNode>
  )
}
