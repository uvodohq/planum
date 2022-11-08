import * as React from 'react'

import type { CSS, SpacingValue } from '../theme'
import { styled } from '../theme'

export const Box = styled('div', {})

export type StackProps = React.ComponentProps<typeof Box> & {
  y?: SpacingValue
  x?: SpacingValue
}

export const Stack = (props: StackProps) => {
  const { x, y, ...rest } = props

  return (
    <Box {...rest}>
      {React.Children.map(props.children, (child) => {
        return (
          <Box
            css={{
              '&:not(:last-child)': {
                mb: y,
                mr: x,
                margin: '',
              },
            }}>
            {child}
          </Box>
        )
      })}
    </Box>
  )
}

interface FlexProps {
  dir?: 'row' | 'column'
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around'
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  center?: boolean
  gap?: SpacingValue
  css?: CSS
  as?: React.ElementType
  [key: string]: any
}

export const Flex = (props: FlexProps) => {
  const { center, gap, align, justify, wrap, css = {}, children } = props

  return (
    <Box
      css={{
        display: 'flex',
        gap,
        alignItems: align ?? center ? 'center' : '',
        justifyContent: justify ?? center ? 'center' : '',
        flexWrap: wrap,

        ...(css as any),
      }}>
      {children}
    </Box>
  )
}

export interface SpacerProps extends StackProps {}

export const Spacer = (props: SpacerProps) => {
  const { x, y, css = {}, ...rest } = props

  return (
    <Box
      css={{
        height: y,
        width: x,
        minWidth: x,
        ...(css as any),
      }}
      {...rest}
    />
  )
}
