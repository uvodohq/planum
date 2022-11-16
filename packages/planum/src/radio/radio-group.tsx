import { useRadioGroup } from '@react-aria/radio'
import { useDOMRef } from '@react-spectrum/utils'
import { useRadioGroupState } from '@react-stately/radio'
import type { AriaRadioGroupProps } from '@react-types/radio'
import type { DOMRef } from '@react-types/shared'
import type { ReactElement } from 'react'
import * as React from 'react'

import { RadioContext } from './context'
import type { RadioProps } from './radio'

export type RadioGroupProps = AriaRadioGroupProps & {
  children: ReactElement<RadioProps> | ReactElement<RadioProps>[]
}

function _RadioGroup(props: RadioGroupProps, ref: DOMRef<HTMLDivElement>) {
  const { children } = props
  const domRef = useDOMRef(ref)

  const state = useRadioGroupState(props)
  const { radioGroupProps } = useRadioGroup(props, state)

  return (
    <div {...radioGroupProps} ref={domRef}>
      <div>
        <RadioContext.Provider
          value={{
            state,
          }}>
          {children}
        </RadioContext.Provider>
      </div>
    </div>
  )
}

export const RadioGroup = React.forwardRef(_RadioGroup)

RadioGroup.displayName = 'RadioGroup'
