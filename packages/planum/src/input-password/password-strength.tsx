import { Flex, Stack } from '../layout'
import { Paragraph } from '../text'
import CheckCircleIcon from './icons/check-circle-icon'
import XCircleIcon from './icons/x-circle'
import {
  StyledIcon,
  StyledIndicator,
  StyledOption,
} from './input-password.styles'

interface OptionProps {
  isPassed: boolean
  strengthText: string
}

export interface StrengthType {
  contains: string[]
  value: string
}

function Option(props: OptionProps) {
  const { isPassed, strengthText } = props

  return (
    <StyledOption>
      <StyledIcon isPassed={isPassed}>
        {isPassed ? <CheckCircleIcon size={24} /> : <XCircleIcon size={24} />}
      </StyledIcon>

      <Paragraph css={{ color: '$textMedium' }}>{strengthText}</Paragraph>
    </StyledOption>
  )
}

export function PasswordStrength({ strength }: { strength: StrengthType }) {
  const containsValue = strength.contains

  const hasNumber = strength.contains?.includes('number')
  const hasUppercase = strength.contains?.includes('uppercase')
  const hasMinLength = strength.value?.length >= 8

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
          <Option isPassed={hasMinLength} strengthText="8 characters minimum" />
          <Option isPassed={hasNumber} strengthText="a number" />
          <Option isPassed={hasUppercase} strengthText="an uppercase letter" />
        </Stack>

        <Paragraph css={{ fw: '$medium', textTransform: 'capitalize' }}>
          {strengthValue === 'tooWeak' ? 'too weak' : strengthValue}
        </Paragraph>
      </Flex>
    </>
  )
}
