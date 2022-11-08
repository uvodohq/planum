import { filterDOMProps } from '@react-aria/utils'
import { useDOMRef, useSlotProps } from '@react-spectrum/utils'
import type { DOMProps, DOMRef } from '@react-types/shared'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'

import { styled } from '../theme'
import { commonCss } from './typography'

const Span = styled('span', commonCss, { fontSize: '$base' })

export interface TextProps extends DOMProps {
  children: ReactNode
  /**
   * A slot to place the text in.
   * @default 'text'
   */
  slot?: string
}

function _Text(props: TextProps, ref: DOMRef) {
  props = useSlotProps(props, 'text')
  const { children, ...otherProps } = props
  const domRef = useDOMRef(ref)

  return (
    <Span {...filterDOMProps(otherProps)} ref={domRef}>
      {children}
    </Span>
  )
}

const Text = forwardRef(_Text)

export default Text
