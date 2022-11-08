import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Button } from '../button'
import { Flex } from '../layout'
import { CloseIcon } from '../modal/dialog/close-icon'
import type { CSS } from '../theme'
import type { StyledAlertVariants } from './alert.styles'
import {
  AlertContainer,
  StyledContent,
  StyledIcon,
  StyledText,
} from './alert.styles'
import { CheckCircleIcon, InfoIcon, QuestionIcon } from './icons'

export interface AlertProps extends StyledAlertVariants {
  title?: string
  message?: React.ReactNode

  /**
   * variant of the alert
   * @default 'info'
   */
  variant?: 'primary' | 'error' | 'warning' | 'success' | 'info'
  onClose?: () => void
  closable?: boolean
  actions?: React.ReactNode
  isOpen?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  css?: CSS
  children?: never
}

export const Alert = (props: AlertProps) => {
  const {
    title,
    message,
    variant = 'info',
    onClose = () => {},
    closable = true,
    actions,
    isOpen = true,

    ...rest
  } = props
  const [isAlertOpen, setOpen] = useState(isOpen)

  const variantMap = {
    primary: {
      icon: <QuestionIcon />,
      color: '$primary200',
    },
    success: {
      icon: <CheckCircleIcon />,
      color: '$success200',
    },
    info: {
      icon: <InfoIcon />,
      color: '$info200',
    },
    warning: {
      icon: <InfoIcon />,
      color: '$warning200',
    },
    error: {
      icon: <InfoIcon />,
      color: '$error200',
    },
  }

  const alertIcon = variantMap[variant].icon

  function onCloseAlert(e: any) {
    e.preventDefault()
    e.stopPropagation()
    setOpen(false)
    onClose()
  }

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isAlertOpen && (
        <AlertContainer
          role="alert"
          variant={variant}
          as={motion.div}
          initial={{ height: 'auto' }}
          animate={{ height: 'auto' }}
          exit={{
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.3 }}
          {...rest}>
          <Flex>
            <StyledIcon>{alertIcon}</StyledIcon>

            <StyledContent>
              {title && (
                <StyledText css={{ fw: '$semibold' }} role="title">
                  {title}
                </StyledText>
              )}
              {message && <StyledText role="description">{message}</StyledText>}
              {actions}
            </StyledContent>
          </Flex>

          {closable && (
            <Button
              icon={<CloseIcon size={24} />}
              aria-label="close alert"
              variant={variant}
              onClick={onCloseAlert}
              size="min"
              css={{
                color: variantMap[variant].color,
              }}
              compact
            />
          )}
        </AlertContainer>
      )}
    </AnimatePresence>
  )
}
