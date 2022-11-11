import { StyledSpan } from './flag.styles'
import type { CountryCode } from './types'

export interface FlagProps {
  country: CountryCode
  width?: string
  height?: string
}

function getImgSrc(alpha: CountryCode) {
  return `https://flagcdn.com/${alpha.toLowerCase()}.svg`
}

export function Flag(props: FlagProps) {
  const { country, width = '$28', height = '$16' } = props

  const css = {
    backgroundImage: `url(${getImgSrc(country)})`,
    width,
    height,
  }

  const isWorldWide = country.toLowerCase() === 'ww'

  return (
    <StyledSpan css={css} borderless={isWorldWide}>
      {isWorldWide && '🌏'}
    </StyledSpan>
  )
}
