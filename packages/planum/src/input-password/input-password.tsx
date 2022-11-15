import { useToggleState } from '@react-stately/toggle'
import * as React from 'react'

import { Button } from '../button'
import type { InputProps } from '../input'
import { Input } from '../input'
import { Box } from '../layout'
import { __DEV__ } from '../utils/assertion'
import EyeIcon from './icons/eye'
import EyeSlashIcon from './icons/eye-slash'

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

  return (
    <Input
      {...props}
      type={inputType}
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
  )
}

export const InputPassword = React.forwardRef(_InputPassword)

if (__DEV__) InputPassword.displayName = 'InputPassword'
