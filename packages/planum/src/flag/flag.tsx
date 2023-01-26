import type { CSS } from '../theme'
import { StyledSpan } from './flag.styles'
import type { CountryCode } from './types'

export interface FlagProps {
  country: CountryCode
  width?: string
  height?: string
  css?: CSS
}

function getImgSrc(alpha: CountryCode) {
  return `https://flagcdn.com/${alpha.toLowerCase()}.svg`
}

export function Flag(props: FlagProps) {
  const { country, width = '$28', height = '$16', css: otherCss } = props

  const css = {
    backgroundImage: `url(${getImgSrc(country)})`,
    width,
    minWidth: width,
    height,
    ...otherCss,
  }

  const isWorldWide = country.toLowerCase() === 'ww'

  return (
    <StyledSpan css={css} borderless={isWorldWide}>
      {isWorldWide && '🌏'}
    </StyledSpan>
  )
}
