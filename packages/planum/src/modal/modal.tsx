import {
  FloatingNode,
  FloatingTree,
  useFloatingParentNodeId,
} from '@floating-ui/react-dom-interactions'
import { cloneElement } from 'react'

import { ModalContext } from './modal-context'
import { ModalPopup } from './modal-popup'
import type { UseModalProps } from './use-modal'
import { useModal } from './use-modal'
import type { ModalState } from './use-modal-state'
import { useModalState } from './use-modal-state'

export interface ModalProps extends UseModalProps {
  children: React.ReactNode
  state?: ModalState
  /**
   * how to open modal on mobile screens. default is 'fixed'
   */
  openOnMobileAs?: 'bottomsheet' | 'drawer'

  onCloseAnimationEnd?: () => void
  initialFocus?: number | React.MutableRefObject<HTMLElement | null>
}

const ModalComponent = (props: ModalProps) => {
  const innerState = useModalState()
  const {
    trigger,
    children,
    closable,
    state = innerState,
    onClose,
    openOnMobileAs = 'drawer',
    initialFocus = 0,
    onCloseAnimationEnd,
  } = props

  const modal = useModal({ closable, trigger, onClose }, state)
  const { referenceProps, nodeId } = modal

  return (
    <ModalContext.Provider value={state}>
      <FloatingNode id={nodeId}>
        {trigger ? cloneElement(trigger, referenceProps) : null}

        <ModalPopup
          state={state}
          modal={modal}
          onCloseAnimationEnd={onCloseAnimationEnd}
          openOnMobileAs={openOnMobileAs}
          initialFocus={initialFocus}>
          {children}
        </ModalPopup>
      </FloatingNode>
    </ModalContext.Provider>
  )
}

export const Modal = (props: ModalProps) => {
  const parentId = useFloatingParentNodeId()
  const isFirstRootModal = parentId === null

  if (isFirstRootModal) {
    return (
      // TODO: stoping propagation for when modal close, click event dispatchs automatically, and causes other links click. redundant span tag need to be removed
      // if trigger prop not provided, modal focuses other underlay elements when closes.
      <span
        onClick={(e) => e.stopPropagation()}
        style={{ display: props.trigger ? '' : 'none' }}>
        <FloatingTree>
          <ModalComponent {...props} />
        </FloatingTree>
      </span>
    )
  }

  return <ModalComponent {...props} />
}
