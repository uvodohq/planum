import { styled } from '../theme'

export const StyledButton = styled('button', {
  borderRadius: '$md',
  padding: '$4',
  position: 'relative',
  cursor: 'pointer',
  userSelect: 'none',
  border: 'none',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  outline: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minSize: '$32',

  variants: {
    isPressed: {
      true: {},
    },

    isFocusVisible: {
      true: {},
    },

    isSelected: {
      true: {
        '&:hover': {
          backgroundColor: '$black800',
        },
      },

      false: {
        '&:hover': {
          backgroundColor: '$black200',
        },
      },
    },
  },

  compoundVariants: [
    {
      isPressed: false,
      isSelected: true,
      css: {
        backgroundColor: '$black',
        color: '$white',
      },
    },

    {
      isPressed: true,
      isSelected: false,
      css: {
        color: '$black',
        backgroundColor: '$black400',
      },
    },

    {
      isPressed: true,
      isSelected: true,
      css: {
        color: '$white',
        backgroundColor: '$black800',
      },
    },

    {
      isFocusVisible: true,
      isSelected: true,
      css: {
        boxShadow: '0 0 0 2px $colors$black600',
      },
    },

    {
      isFocusVisible: true,
      isSelected: false,
      css: {
        boxShadow: '0 0 0 2px $colors$black600',
      },
    },
  ],
})
