// TODO: add hover css to checkbox on label hover
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'
import { useRadio } from '@react-aria/radio'
import { useFocusableRef } from '@react-spectrum/utils'
import type { AriaRadioProps } from '@react-types/radio'
import type { FocusableRef } from '@react-types/shared'
import * as React from 'react'

import type { CSS } from '../theme'
import { useRadioProvider } from './context'
import type { StyledRadioSvg } from './radio.styles'

type Variants = React.ComponentProps<typeof StyledRadioSvg> & { css?: CSS }

export type RadioProps = AriaRadioProps & Variants

export function useRadioProps(
  props: RadioProps,
  ref: FocusableRef<HTMLLabelElement>,
) {
  const { isDisabled, autoFocus, value } = props

  const { hoverProps, isHovered } = useHover({ isDisabled })
  const { focusProps, isFocusVisible } = useFocusRing({
    autoFocus,
  })

  const inputRef = React.useRef<HTMLInputElement>(null)
  const domRef = useFocusableRef(ref, inputRef)

  const radioGroupProps = useRadioProvider()
  const { state, type } = radioGroupProps

  const { inputProps } = useRadio(
    {
      ...props,
      ...radioGroupProps,
      isDisabled,
    },
    state,
    inputRef,
  )

  const isSelected = state.selectedValue === value

  return {
    type,

    inputProps,
    hoverProps,
    focusProps,

    //
    isSelected,
    isDisabled,
    isHovered,
    isFocusVisible,

    //
    inputRef,
    domRef,
  }
}
