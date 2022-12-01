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

interface Variants {
  css?: CSS
  isHovered: boolean
  isSelected: boolean
  isDisabled: boolean
  isFocusVisible: boolean
}

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
  const { state, type, full } = radioGroupProps

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
    full,

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
