import { keyframes, styled } from '../theme'

export const rotate = keyframes({
  to: { transform: 'rotate(360deg)' },
})

export const dash = keyframes({
  '0%': { strokeDasharray: '1, 150', strokeDashoffset: 0 },
  '50%': { strokeDasharray: '90, 150', strokeDashoffset: -35 },
  '100%': { strokeDasharray: '90, 150', strokeDashoffset: -124 },
})

export const Svg = styled('svg', {
  animation: `${rotate} linear infinite`,
  borderRadius: '$pill',
  width: '100%',
  height: '100%',
})

export const Circle = styled('circle', {
  stroke: 'currentColor',
  strokeLinecap: 'round',
  animation: `${dash} infinite`,
  transition: 'stroke-dashoffset 0.3s ease-in-out',
})

export const CircleTrack = styled('circle', {})

export const LoaderContainer = styled('span', {
  position: 'relative',
  dflex: 'center',
  display: 'inline-flex',
  overflow: 'hidden',

  variants: {
    isIndeterminate: {
      false: {
        [`& ${Svg}`]: {
          animation: 'none',
          transform: 'rotate(-90deg)',
        },
        [`& ${Circle}`]: {
          animation: 'none',
          strokeDasharray: 100,
          strokeDashoffset: 'var(--planum-loader-percentage)',
        },
      },
    },
    speed: {
      fast: {
        [`& ${Svg}`]: {
          animationDuration: '1s',
        },
        [`& ${Circle}`]: {
          animationDuration: '1.2s',
        },
      },
      slow: {
        [`& ${Svg}`]: {
          animationDuration: '1.5s',
        },
        [`& ${Circle}`]: {
          animationDuration: '2s',
        },
      },
    },
    size: {
      default: {
        size: '$24',
      },
      medium: {
        size: '$40',
        p: '$4',
      },
      small: {
        size: '$16',
        p: '$2',
      },
    },

    theme: {
      dark: {
        color: 'currentColor',

        [`& ${CircleTrack}`]: {
          stroke: 'rgba(0, 0, 0, 0.1)',
        },
      },

      light: {
        color: '$white',
        [`& ${CircleTrack}`]: {
          stroke: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
  },

  defaultVariants: {
    speed: 'fast',
    size: 'default',
    theme: 'dark',
  },
})
