import { filterDOMProps } from '@react-aria/utils'
import type {
  AriaLabelingProps,
  DOMProps,
  Orientation,
} from '@react-types/shared'

import { StyledDiv } from './separator.styles'

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
  const ariaOrientation: Orientation =
    props.orientation === 'vertical' ? 'vertical' : 'horizontal'

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

export function Separator(props: SeparatorProps) {
  const { separatorProps } = useSeparator(props)

  return (
    <StyledDiv
      {...props}
      {...separatorProps}
      direction={props.orientation ?? 'horizontal'}
    />
  )
}
