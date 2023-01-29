import { useToggleState } from '@react-stately/toggle'
import * as React from 'react'
import { memo, useCallback } from 'react'

import { useStrengthIndicator } from '../../hooks'
import { Button } from '../button'
import type { InputProps } from '../input'
import { Input } from '../input'
import { Box } from '../layout'
import { Tooltip, TooltipPopup, TooltipTrigger } from '../tooltip'
import { isDev } from '../utils'
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

  const handleChange = useCallback((value: string) => {
    setStrength(passwordStrength(value))

    if (props.onChange) {
      props.onChange(value)
    }
  }, [])

  return (
    <Box>
      <Input
        {...props}
        type={inputType}
        onChange={handleChange}
        suffix={
          <Tooltip>
            <TooltipTrigger asChild>
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

if (isDev) InputPassword.displayName = 'InputPassword'
