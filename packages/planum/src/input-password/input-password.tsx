import { useToggleState } from '@react-stately/toggle'
import * as React from 'react'

import { useStrengthIndicator } from '../../hooks'
import { Button } from '../button'
import type { InputProps } from '../input'
import { Input } from '../input'
import { Box } from '../layout'
import { Tooltip, TooltipPopup, TooltipTrigger } from '../tooltip'
import { __DEV__ } from '../utils/assertion'
import EyeIcon from './icons/eye'
import EyeSlashIcon from './icons/eye-slash'
import type { StrengthType } from './password-strength'
import { PasswordStrength } from './password-strength'

function usePasswordToggle() {
  const state = useToggleState({
    defaultSelected: true,
  })

  return {
    inputType: state.isSelected ? 'password' : 'text',
    icon: state.isSelected ? <EyeSlashIcon /> : <EyeIcon />,
    toggle: state.toggle,
    hoverText: state.isSelected ? 'Show password' : 'Hide password',
  }
}

export interface InputPasswordProps extends InputProps {
  checkStrength?: boolean
}

function _InputPassword(
  props: InputPasswordProps,
  forwardedRef: React.Ref<HTMLInputElement>,
) {
  const { inputType, icon, toggle, hoverText } = usePasswordToggle()
  const [strength, setStrength] = React.useState<StrengthType>()
  const passwordStrength = useStrengthIndicator()

  function handleChange(value: string) {
    setStrength(passwordStrength(value))

    if (props.onChange) {
      props.onChange(value)
    }
  }

  return (
    <Box>
      <Input
        {...props}
        type={inputType}
        onChange={handleChange}
        suffix={
          <Box>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  aria-label="toggle password visibility"
                  variant="flatDark"
                  icon={icon}
                  size="sm"
                  css={{ mr: '-$12' }}
                  onClick={toggle}
                />
              </TooltipTrigger>
              <TooltipPopup>{hoverText}</TooltipPopup>
            </Tooltip>
          </Box>
        }
        ref={forwardedRef}
      />

      {props.checkStrength && strength?.contains.length ? (
        <PasswordStrength strength={strength} />
      ) : (
        ''
      )}
    </Box>
  )
}

export const InputPassword = React.forwardRef(_InputPassword)

if (__DEV__) InputPassword.displayName = 'InputPassword'
