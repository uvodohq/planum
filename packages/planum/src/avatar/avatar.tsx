import { Img } from '../img'
import { fallbackCss, imgCss } from './avatar.styles'
import type { AvatarProps } from './avatar.type'

export const Avatar = (props: AvatarProps) => {
  const { size = 32, initials, ...rest } = props

  return (
    <Img
      renderFallback={(status) => (status === 'error' ? initials : '')}
      size={size}
      className={imgCss()}
      fallbackClassName={fallbackCss()}
      borderless
      {...rest}
    />
  )
}
