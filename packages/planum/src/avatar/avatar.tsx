import type { ImgProps } from '../img'
import Img from '../img'
import { captionCss } from '../text'
import { css } from '../theme'

const fallbackCss = css(captionCss, {
  fontWeight: '$medium',
  textTransform: 'uppercase',

  '&&': {
    backgroundColor: '$secondary',
    color: '$textDark',
  },
})

const imgCss = css({
  '&&': {
    backgroundColor: '$secondary',
    borderRadius: '$sm',
  },
})

export interface AvatarProps extends ImgProps {
  initials?: string
}

const Avatar = (props: AvatarProps) => {
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

export default Avatar
