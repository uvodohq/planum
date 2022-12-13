import { useCheckboxGroup } from '@react-aria/checkbox'
import { useDOMRef } from '@react-spectrum/utils'
import { useCheckboxGroupState } from '@react-stately/checkbox'
import type { DOMRef } from '@react-types/shared'
import * as React from 'react'

import { Box } from '../layout'
import { CheckboxGroupContext } from './context'
import type { CheckboxGroupProps } from './type'

function _CheckboxGroup(
  props: CheckboxGroupProps,
  ref: DOMRef<HTMLDivElement>,
) {
  const { children, css } = props
  const domRef = useDOMRef(ref)

  const state = useCheckboxGroupState(props)
  const { groupProps } = useCheckboxGroup(props, state)

  return (
    <Box {...groupProps} ref={domRef} css={css}>
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
    </Box>
  )
}

export const CheckboxGroup = React.forwardRef(_CheckboxGroup)

CheckboxGroup.displayName = 'CheckboxGroup'
