import { filterDOMProps } from '@react-aria/utils'
import type {
  AriaLabelingProps,
  DOMProps,
  Orientation,
} from '@react-types/shared'

import { Element } from './separator.styles'

export interface SeparatorProps extends DOMProps, AriaLabelingProps {
  /**
   * The orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: Orientation
  elementType?: string
  css?: any
}

function useSeparator(props: SeparatorProps) {
  const domProps = filterDOMProps(props, { labelable: true })
  let ariaOrientation

  if (props.orientation === 'vertical') {
    ariaOrientation = 'vertical'
  }

  if (props.elementType !== 'hr') {
    return {
      separatorProps: {
        ...domProps,
        role: 'separator',
        'aria-orientation': ariaOrientation,
      },
    }
  }
  return { separatorProps: domProps }
}

export default function Separator(props: SeparatorProps) {
  const { separatorProps } = useSeparator(props)

  return (
    <Element
      {...separatorProps}
      {...props}
      orientation={props.orientation ?? 'horizontal'}
    />
  )
}
