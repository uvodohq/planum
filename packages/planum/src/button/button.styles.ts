import type { VariantProps } from '../theme'
import { styled } from '../theme'
import { fadeIn } from '../theme/animations'

export const ContentPlace = styled('span', {
  dflex: 'center',
  flexWrap: 'nowrap',
})

export const LoadingPlace = styled('span', {
  position: 'absolute',
  inset: '0',
  dflex: 'center',
  animation: `${fadeIn} 0.2s`,
})

export const LeftIconWrapper = styled('span', {
  dflex: 'center',
  marginRight: '$4',
})

export const RightIconWrapper = styled('span', {
  dflex: 'center',
  marginLeft: '$4',
})

export const ButtonTextContent = styled('span', {
  whiteSpace: 'nowrap',
})

export const StyledButton = styled('button', {
  dflex: 'center',
  display: 'inline-flex',
  transition: 'background-color 0.1s, transform 0.05s, color 0.2s',
  fontWeight: '$semibold',
  fontFamily: '$sans',
  userSelect: 'none',
  position: 'relative',
  outline: 'none',
  border: '1px solid transparent',
  borderRadius: '$sm',
  cursor: 'pointer',

  '&:focus-visible': {
    borderColor: '$primary600',
    outline: '2px solid $colors$primary100',
    outlineOffset: '3px',
  },

  '&:active': {
    transform: 'translateY(.999px)',
    outline: 'none',
  },

  variants: {
    size: {
      lg: {
        height: '$64',
        padding: '$8',
        fontSize: '$sm',
        lineHeight: '$xl',
        borderRadius: 'unset',
      },
      md: {
        height: '$48',
        padding: '$8 $16',
        fontSize: '$base',
        lineHeight: '$xxl',
      },
      sm: {
        height: '$40',
        padding: '$8',
        fontSize: '$xs',
        lineHeight: '$xl',
      },
      xs: {
        height: '$32',
        padding: '$4',
        fontSize: '$min',
        lineHeight: '$lg',
      },

      min: {
        height: '$24',
      },
    },

    isIconButton: {
      true: {},
    },

    auto: {
      true: {
        width: 'auto',
        minWidth: 'min-content',
      },
    },

    full: {
      true: {
        w: '100%',
      },
    },

    variant: {
      primary: {
        backgroundColor: '$primary600',
        color: '$white',

        '&:hover': {
          backgroundColor: '$primary800',
        },
      },

      secondary: {
        backgroundColor: 'transparent',
        borderColor: '$primary600',
        color: '$primary600',

        '&:hover': {
          backgroundColor: '$primary100',
        },
      },

      secondaryDark: {
        backgroundColor: '$surface100',
        borderColor: '$surface200',
        color: '$textDark',

        '&:hover': {
          backgroundColor: '$surface200',
          borderColor: '$surface300',
        },
      },

      secondaryDanger: {
        backgroundColor: 'transparent',
        borderColor: '$danger600',
        color: '$danger600',

        '&:hover': {
          backgroundColor: '$danger100',
        },
      },

      danger: {
        backgroundColor: '$danger600',
        color: '$white',

        '&:hover': {
          backgroundColor: '$danger800',
        },
      },

      flat: {
        backgroundColor: 'transparent',
        color: '$primary600',

        '&:hover': {
          backgroundColor: '$primary100',
        },
      },

      flatDanger: {
        backgroundColor: 'transparent',
        color: '$danger600',

        '&:hover': {
          backgroundColor: '$danger100',
        },
      },

      error: {
        backgroundColor: 'transparent',
        color: '$danger600',

        '&:hover': {
          backgroundColor: '$danger100',
        },
      },

      flatWhite: {
        backgroundColor: '$surface800',
        color: '$white ',

        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
      },

      flatDark: {
        backgroundColor: 'transparent',
        color: '$black600',

        '&:hover': {
          backgroundColor: '$black100',
        },
      },

      success: {
        backgroundColor: 'transparent',
        color: '$success',

        '&:hover': {
          color: '$success800',
        },
      },

      warning: {
        color: '$warning',
        backgroundColor: 'transparent',

        '&:hover': {
          color: '$warning800',
        },
      },

      info: {
        color: '$info',
        backgroundColor: 'transparent',

        '&:hover': {
          color: '$info800',
        },
      },

      whatsapp: {
        backgroundColor: '$success600',
        color: '$white',

        '&:hover': {
          backgroundColor: '$success500',
        },
      },
    },

    rounded: {
      true: {
        borderRadius: '$pill',
      },
    },

    isDisabled: {
      true: {
        disableActions: true,
      },
    },

    isLoading: {
      true: {
        disableActions: true,
      },
    },

    compact: {
      true: {
        padding: '0 !important',
        height: '$24 !important',
        fontSize: '$xs !important',
        '&&:hover': {
          background: 'transparent',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },

  compoundVariants: [
    {
      variant: 'primary',
      compact: true,
      css: {
        background: 'transparent',
        color: '$primary',

        '&:hover': {
          color: '$primary800',
        },
      },
    },
    {
      variant: 'error',
      compact: true,
      css: {
        '&:hover': {
          color: '$danger800',
        },
      },
    },
    {
      variant: 'flat',
      compact: true,
      css: {
        '&:hover': {
          color: '$primary800',
        },
      },
    },
    {
      variant: 'flatDanger',
      compact: true,
      css: {
        '&:hover': {
          color: '$danger800',
        },
      },
    },
    {
      variant: 'primary',
      isDisabled: true,
      css: {
        backgroundColor: '$primary300',
      },
    },
    {
      variant: 'secondary',
      isDisabled: true,
      css: {
        borderColor: '$primary200',
        color: '$primary200',
      },
    },
    {
      variant: 'secondaryDark',
      isDisabled: true,
      css: {
        opacity: 0.64,
      },
    },
    {
      variant: 'flat',
      isDisabled: true,
      css: {
        color: '$primary300',
      },
    },
    {
      variant: 'flatDanger',
      isDisabled: true,
      css: {
        color: '$danger300',
      },
    },

    {
      variant: 'flatDark',
      isDisabled: true,
      css: {
        opacity: 0.64,
      },
    },
    {
      variant: 'secondaryDanger',
      isDisabled: true,
      css: {
        color: '$danger300',
        borderColor: '$danger300',
      },
    },
    {
      variant: 'danger',
      isDisabled: true,
      css: {
        backgroundColor: '$danger300',
      },
    },
    // Icon Button Sizes
    {
      isIconButton: true,
      size: 'lg',
      css: {
        maxWidth: '$64',
      },
    },
    {
      isIconButton: true,
      size: 'md',
      css: {
        maxWidth: '$48',
      },
    },
    {
      isIconButton: true,
      size: 'sm',
      css: {
        size: '$40',
      },
    },
    {
      isIconButton: true,
      size: 'xs',
      css: {
        size: '$32',
      },
    },
    {
      isIconButton: true,
      size: 'min',
      css: {
        size: '$24',
      },
    },
  ],
})

export type StyledButtonVariants = VariantProps<typeof StyledButton>
