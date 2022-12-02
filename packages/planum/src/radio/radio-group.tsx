import { useRadioGroup } from '@react-aria/radio'
import { useDOMRef } from '@react-spectrum/utils'
import { useRadioGroupState } from '@react-stately/radio'
import type { AriaRadioGroupProps } from '@react-types/radio'
import type { DOMRef } from '@react-types/shared'
import type { ReactElement } from 'react'
import * as React from 'react'

import { RadioContext } from './context'
import type { RadioProps } from './radio'
import {
  StyleButtonGroupContainer,
  StyleRadioGroupContainer,
} from './radio.styles'

export type RadioGroupProps = AriaRadioGroupProps & {
  children: ReactElement<RadioProps> | ReactElement<RadioProps>[]

  /**
   * show as Button or Circlur radio
   */
  type?: 'button' | 'radio'

  /**
   * show full width buttons on mobile if group type is button
   */
  full?: boolean
}

function _RadioGroup(props: RadioGroupProps, ref: DOMRef<HTMLDivElement>) {
  const { children, type = 'radio', full = false } = props
  const domRef = useDOMRef(ref)

  const state = useRadioGroupState(props)
  const { radioGroupProps } = useRadioGroup(props, state)

  const Container =
    type === 'button' ? StyleButtonGroupContainer : StyleRadioGroupContainer

  return (
    <Container {...radioGroupProps} ref={domRef} full={full}>
      <RadioContext.Provider
        value={{
          state,
          type,
          full,
        }}>
        {children}
      </RadioContext.Provider>
    </Container>
  )
}

export const RadioGroup = React.forwardRef(_RadioGroup)

RadioGroup.displayName = 'RadioGroup'
