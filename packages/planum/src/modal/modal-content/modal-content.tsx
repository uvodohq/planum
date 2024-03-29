import { useContext } from 'react'

import type { CSS } from '../../theme'
import { ModalContext } from '../modal-context'
import type { ModalState } from '../use-modal-state'
import { CloseIcon } from './close-icon'
import {
  StyledCloseButton,
  StyledDialogBody,
  StyledDialogContainer,
  StyledDialogDesc,
  StyledDialogHeader,
  StyledDialogTitle,
} from './modal-content.styles'

export interface ModalContentProps {
  titleCss?: CSS
  title?: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  renderFooter?: (props: ModalState) => React.ReactNode
  scrollBodyRef?: React.RefObject<HTMLDivElement>
  css?: CSS
}

export const ModalContent = (props: ModalContentProps) => {
  const {
    title,
    description,
    children,
    titleCss,
    renderFooter,
    scrollBodyRef,
    ...rest
  } = props

  const state = useContext(ModalContext)
  const { closeModal, labelId, descriptionId } = state

  return (
    <StyledDialogContainer {...rest}>
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
