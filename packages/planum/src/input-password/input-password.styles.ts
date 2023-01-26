import { styled } from '../theme'

export const StyledIndicator = styled('span', {
  display: 'inline-block',
  width: '100%',
  height: '$8',
  backgroundColor: '$surface200',
  borderRadius: '999px',
  position: 'relative',
  my: '$16',

  '&:after': {
    content: '""',
    borderRadius: '999px',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: '$8',
    transition: 'width 0.6s ease-in-out, background-color 0.6s ease-in-out',
    transitionDelay: '0.2s',
  },

  variants: {
    strength: {
      tooWeak: {
        '&:after': {
          backgroundColor: '$danger400',
          width: 'calc((120 / 504) * 100%)',
        },
      },
      weak: {
        '&:after': {
          backgroundColor: '$warning400',
          width: 'calc((200 / 504) * 100%)',
        },
      },
      good: {
        '&:after': {
          backgroundColor: '$success400',
          width: 'calc((440 / 504) * 100%)',
        },
      },
      strong: {
        '&:after': {
          backgroundColor: '$primary',
          width: '100%',
        },
      },
    },
  },
})

export const StyledOption = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
})

export const StyledIcon = styled('span', {
  color: '$danger',
  transition: 'color 0.2s ease-in-out',

  variants: {
    isPassed: {
      true: {
        color: '$success',
      },
    },
  },
})
