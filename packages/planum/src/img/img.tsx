// TODO: flickering on rerenders
import type * as ImgBase from '@radix-ui/react-avatar'
import * as React from 'react'

import type { CSS } from '../theme'
import FallbackImg from './fallback-img'
import {
  Border,
  StyledContainer,
  StyledFallback,
  StyledImage,
} from './img.styles'

export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: number
  className?: string
  borderless?: boolean
  css?: CSS
  fallbackClassName?: string
  renderFallback?: (status: ImgBase.ImageLoadingStatus) => React.ReactNode
  defaultStatus?: ImgBase.ImageLoadingStatus
}

const Inner = (props: ImgProps) => {
  const {
    fallbackClassName,
    renderFallback = () => null,
    src,
    defaultStatus = src ? 'idle' : 'error',
    ...rest
  } = props

  const [status, setStatus] = React.useState(defaultStatus)

  const isError = status === 'error'

  // show default fallback only on error
  const defaultFallback = isError && <FallbackImg />
  const providedFallback = renderFallback(status)

  const image = (
    <StyledImage src={src} onError={() => setStatus('error')} {...rest} />
  )

  return (
    <>
      <Border status={status as any} animated={!providedFallback} />
      {!isError ? (
        image
      ) : (
        <StyledFallback
          css={{
            bg: status === 'loading' ? 'transparent' : '$white',
          }}
          className={fallbackClassName}
          // delayMs={1000}
        >
          {providedFallback || defaultFallback}
        </StyledFallback>
      )}
    </>
  )
}

export function Img(props: ImgProps) {
  const { size = '100%', css = {}, className, borderless, ...rest } = props

  return (
    <StyledContainer
      css={{
        size,
        minSize: size,
        ...(css as any),
      }}
      className={className}
      borderless={borderless}>
      <Inner {...rest} />
    </StyledContainer>
  )
}
