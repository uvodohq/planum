import { Button } from '../button'
import CloseIcon from './close-icon'
import type { StyledNotificationVariants } from './notification.styles'
import {
  StyledBody,
  StyledMessage,
  StyledNotification,
} from './notification.styles'

export interface NotificationProps extends StyledNotificationVariants {
  message?: React.ReactNode
  onCloseClick?: (e: any) => void
}

export const Notification = (props: NotificationProps) => {
  const { message, onCloseClick, ...rest } = props

  return (
    <StyledNotification role="alert" {...rest}>
      <StyledBody
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}>
        <StyledMessage>{message}</StyledMessage>
        <Button
          variant="flatWhite"
          rounded
          size="min"
          icon={<CloseIcon />}
          onClick={onCloseClick}
        />
      </StyledBody>

      {/* {renderFooterButton && (
        <StyledFooter>{renderFooterButton()}</StyledFooter>
      )} */}
    </StyledNotification>
  )
}
