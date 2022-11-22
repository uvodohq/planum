import { useContext } from 'react'

import type { CSS } from '../../theme'
import { ModalContext } from '../modal-context'
import type { ModalState } from '../use-modal-state'
import { CloseIcon } from '@uvodohq/planum-icons'
import {
  StyledCloseButton,
  StyledDialogBody,
  StyledDialogContainer,
  StyledDialogDesc,
  StyledDialogHeader,
  StyledDialogTitle,
} from './dialog.styles'

export interface DialogProps {
  titleCss?: CSS
  title?: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  renderFooter?: (props: ModalState) => React.ReactNode
  scrollBodyRef?: React.RefObject<HTMLDivElement>
}

export const Dialog = (props: DialogProps) => {
  const {
    title,
    description,
    children,
    titleCss,
    renderFooter,
    scrollBodyRef,
  } = props

  const state = useContext(ModalContext)
  const { closeModal, labelId, descriptionId } = state

  return (
    <StyledDialogContainer>
      <StyledDialogHeader>
        <StyledCloseButton
          aria-label="close modal"
          type="button"
          onClick={closeModal}>
          <CloseIcon focusable="false" aria-hidden="true" size={16} />
        </StyledCloseButton>
      </StyledDialogHeader>

      <StyledDialogBody ref={scrollBodyRef}>
        {title && (
          <StyledDialogTitle id={labelId} css={titleCss}>
            {title}
          </StyledDialogTitle>
        )}

        {description && (
          <StyledDialogDesc id={descriptionId}>{description}</StyledDialogDesc>
        )}
        {children}
      </StyledDialogBody>

      {renderFooter?.(state)}
    </StyledDialogContainer>
  )
}
