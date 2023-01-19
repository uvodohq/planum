import { Flex, Stack } from '../layout'
import { Paragraph } from '../text'
import CheckCircleIcon from './icons/check-circle-icon'
import XCircleIcon from './icons/x-circle'
import {
  StyledIcon,
  StyledIndicator,
  StyledOption,
} from './password-strength.styles'

export function PasswordStrength({ strength }: any) {
  const passwordLength = strength.value?.length
  const containsValue = strength.contains

  const hasNumber = strength.contains?.includes('number')
  const hasUppercase = strength.contains?.includes('uppercase')
  const hasMinLength = passwordLength >= 8

  if (hasMinLength) {
    containsValue.push('minLength')
  }

  const containsLength = containsValue?.length
  const strengthValue =
    containsLength === 1
      ? 'tooWeak'
      : containsLength === 2
      ? 'weak'
      : containsLength === 3
      ? 'good'
      : 'strong'

  return (
    <>
      <StyledIndicator strength={strengthValue} />

      <Flex
        css={{
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '$24',
        }}>
        <Stack y="$4">
          <StyledOption>
            <StyledIcon isPassed={hasMinLength}>
              {hasMinLength ? (
                <CheckCircleIcon size={24} />
              ) : (
                <XCircleIcon size={24} />
              )}
            </StyledIcon>

            <Paragraph css={{ color: '$textMedium' }}>
              8 characters minimum
            </Paragraph>
          </StyledOption>

          <StyledOption>
            <StyledIcon isPassed={hasNumber}>
              {hasNumber ? (
                <CheckCircleIcon size={24} />
              ) : (
                <XCircleIcon size={24} />
              )}
            </StyledIcon>

            <Paragraph css={{ color: '$textMedium' }}>a number</Paragraph>
          </StyledOption>

          <StyledOption>
            <StyledIcon isPassed={hasUppercase}>
              {hasUppercase ? (
                <CheckCircleIcon size={24} />
              ) : (
                <XCircleIcon size={24} />
              )}
            </StyledIcon>

            <Paragraph css={{ color: '$textMedium' }}>
              an uppercase letter
            </Paragraph>
          </StyledOption>
        </Stack>

        <Paragraph css={{ fw: '$medium', textTransform: 'capitalize' }}>
          {strengthValue === 'tooWeak' ? 'too weak' : strengthValue}
        </Paragraph>
      </Flex>
    </>
  )
}
