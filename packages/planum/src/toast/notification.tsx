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
  onCloseClick?: () => void
}

export const Notification = (props: NotificationProps) => {
  const { message, onCloseClick, ...rest } = props

  return (
    <StyledNotification role="alert" {...rest}>
      <StyledBody>
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
