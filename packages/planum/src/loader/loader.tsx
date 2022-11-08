import { useProgressBar } from '@react-aria/progress'
import type { AriaProgressBarProps } from '@react-types/progress'
import type { CSSProperties } from 'react'

import { Circle, CircleTrack, LoaderContainer, Svg } from './loader.styles'

export type LoaderProps = React.ComponentProps<typeof LoaderContainer> &
  AriaProgressBarProps

// TODO: delayed loader

function Loader(props: LoaderProps) {
  const {
    // label = 'Loading',
    // showValueLabel = !!label,
    value = 0,
    minValue = 0,
    maxValue = 100,
    isIndeterminate = true,
    theme,
  } = props

  const { progressBarProps } = useProgressBar({
    ...props,
    'aria-label': props['aria-label'] || 'Loading',
  })

  // how many percent left to fill
  const percentage = 100 - ((value - minValue) / (maxValue - minValue)) * 100

  const style = {
    '--planum-loader-percentage': percentage,
  } as CSSProperties

  return (
    <LoaderContainer
      theme={theme}
      {...progressBarProps}
      {...props}
      style={style}>
      <Svg viewBox="0 0 50 50">
        <Circle
          cx="25"
          cy="25"
          r={22}
          fill="none"
          strokeWidth="4"
          {...(isIndeterminate ? {} : { pathLength: 100 })}
        />
        <CircleTrack cx="25" cy="25" r={22} fill="none" strokeWidth="4" />
      </Svg>
    </LoaderContainer>
  )
}

export default Loader
