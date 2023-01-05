import type { AriaToggleButtonProps } from '@uvodohq/planum'
import {
  mergeProps,
  useFocusRing,
  useObjectRef,
  useToggleButton,
  useToggleState,
} from '@uvodohq/planum'
import type { ElementType } from 'react'
import * as React from 'react'

import { StyledButton } from './toggle-button.styles'

type ToggleButtonProps = AriaToggleButtonProps<ElementType> & {
  as?: React.ElementType
}

// TODO: improve with spectrum and make separate component
function _ToggleButton(props: ToggleButtonProps, forwardedRef: any) {
  const ref = useObjectRef<HTMLButtonElement>(forwardedRef)
  // const state = useToggleState(props)
  // const { buttonProps, isPressed } = useToggleButton(props, state, ref)
  const { isFocusVisible, focusProps } = useFocusRing()

  const mergedProps = mergeProps(props, focusProps)

  return (
    <StyledButton
      {...mergedProps}
      // isPressed={isPressed}
      // isSelected={state.isSelected}
      isFocusVisible={isFocusVisible}
      ref={ref}
    />
  )
}

export const ToggleButton = React.forwardRef(_ToggleButton)
