import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Button } from '../button'
import { Box, Flex } from '../layout'
import { CloseIcon } from '../modal/modal-content/close-icon'
import {
  AlertContainer,
  StyledContent,
  StyledIcon,
  StyledText,
} from './alert.styles'
import type { AlertProps } from './alert.type'
import { CheckCircleIcon, InfoIcon, QuestionIcon } from './icons'

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
      color: '$primary300',
    },
    success: {
      icon: <CheckCircleIcon />,
      color: '$success300',
    },
    info: {
      icon: <InfoIcon />,
      color: '$info300',
    },
    warning: {
      icon: <InfoIcon />,
      color: '$warning300',
    },
    error: {
      icon: <InfoIcon />,
      color: '$danger300',
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
        <Box
          role="alert"
          as={motion.div}
          animate={{
            height: 'auto',
            opacity: 1,
          }}
          exit={{
            height: '0px',
            opacity: 0,
          }}
          initial={{
            height: 'auto',
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
          css={{ overflow: 'hidden' }}>
          <AlertContainer variant={variant} {...rest}>
            <Flex>
              <StyledIcon>{alertIcon}</StyledIcon>

              <StyledContent>
                {title && (
                  <StyledText css={{ fw: '$semibold' }} role="title">
                    {title}
                  </StyledText>
                )}
                {message && (
                  <StyledText role="description">{message}</StyledText>
                )}
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
        </Box>
      )}
    </AnimatePresence>
  )
}
