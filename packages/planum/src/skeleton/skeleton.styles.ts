import { Paragraph } from '../text'
import { keyframes, styled } from '../theme'

const shadowAnim = keyframes({
  '0%': {
    backgroundPosition: '200% 0',
  },
})

export const SkeletonImg = styled('div', {
  minSize: '$48',
  borderRadius: '$sm',
  background: '$surface100',
})

export const SkeletonDescription = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const Rect = styled('div', {
  height: '$24',
  display: 'flex',
  alignItems: 'center',
})

export const RectInner = styled(Paragraph, {
  background: '$surface100',
  borderRadius: '$sm',
  height: '0.875rem',
  width: '100%',
})

export const SkeletonCard = styled('div', {
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$16',
  pointerEvents: 'none',

  // '@media (prefers-reduced-motion:reduce)': {
  //   animation: 'none !important',
  // },

  variants: {
    animated: {
      true: {
        [`${RectInner}, ${SkeletonImg}`]: {
          background:
            'linear-gradient(-45deg, transparent 20%, #fbfbfb, transparent 40% ) 0 0 / 200% 100%, #f6f6f6',
          // animation: `${shadowAnim} 1.6s infinite linear`,
          // animation disabled due to scroll performance issue
          backgroundAttachment: `fixed`,
        },
      },
    },
  },
})
