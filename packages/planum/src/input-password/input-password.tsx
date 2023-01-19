import { useToggleState } from '@react-stately/toggle'
import * as React from 'react'

import { Button } from '../button'
import type { InputProps } from '../input'
import { Input } from '../input'
import { Box } from '../layout'
import { __DEV__ } from '../utils/assertion'
import EyeIcon from './icons/eye'
import EyeSlashIcon from './icons/eye-slash'
import { PasswordStrength } from './password-strength'
import { passwordStrengthChecker } from './password-strength-checker'

function usePasswordToggle() {
  const state = useToggleState({
    defaultSelected: true,
  })

  return {
    inputType: state.isSelected ? 'password' : 'text',
    icon: state.isSelected ? <EyeSlashIcon /> : <EyeIcon />,
    toggle: state.toggle,
  }
}

export interface InputPasswordProps extends InputProps {}

function _InputPassword(
  props: InputPasswordProps,
  forwardedRef: React.Ref<HTMLInputElement>,
) {
  const { inputType, icon, toggle } = usePasswordToggle()
  const [strength, setStrength] = React.useState<{
    contains: string[]
    value: string
  }>()

  function handleChange(value: string) {
    setStrength(passwordStrengthChecker(value))

    if (props.onChange) {
      props.onChange(value)
    }
  }

  return (
    <Box>
      <Input
        {...props}
        type={inputType}
        onChange={(value) => handleChange(value)}
        suffix={
          <Box>
            <Button
              aria-label="toggle password visibility"
              variant="flatDark"
              icon={icon}
              size="sm"
              css={{ mr: '-$12' }}
              onClick={toggle}
            />
          </Box>
        }
        ref={forwardedRef}
      />

      {strength?.contains?.length ? (
        <PasswordStrength strength={strength} />
      ) : (
        ''
      )}
    </Box>
  )
}

export const InputPassword = React.forwardRef(_InputPassword)

if (__DEV__) InputPassword.displayName = 'InputPassword'
