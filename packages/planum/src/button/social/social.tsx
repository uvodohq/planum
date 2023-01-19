import { Box } from '../../layout'
import { Subheader } from '../../text'
import type { ButtonProps } from '../button.type'
import { FacebookIcon, GoogleIcon, WhatsappIcon } from '../icons'
import { StyledContainer, StyledText } from './social.styles'

interface WrapperProps extends Omit<ButtonProps, 'variant'> {
  children: string
  icon?: React.ReactNode
  full?: boolean
  variant?: 'whatsapp'
}

function Wrapper(prop: WrapperProps) {
  const { children, icon, full = true, ...rest } = prop

  return (
    <StyledContainer full={full} {...rest}>
      <Box as="span">{icon}</Box>

      <StyledText full={full}>
        <Subheader>{children}</Subheader>
      </StyledText>
    </StyledContainer>
  )
}

export function GoogleButton({
  children,
  ...rest
}: Omit<WrapperProps, 'icon'>) {
  return (
    <Wrapper icon={<GoogleIcon />} {...rest}>
      {children}
    </Wrapper>
  )
}

export function FacebookButton({
  children,
  ...rest
}: Omit<WrapperProps, 'icon'>) {
  return (
    <Wrapper icon={<FacebookIcon />} {...rest}>
      {children}
    </Wrapper>
  )
}

export function WhatsappButton({
  children,
  ...rest
}: Omit<WrapperProps, 'icon'>) {
  return (
    <Wrapper icon={<WhatsappIcon />} variant="whatsapp" {...rest}>
      {children}
    </Wrapper>
  )
}
