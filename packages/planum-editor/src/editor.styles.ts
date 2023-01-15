import { css, customScrollbar, styled, subheaderCss } from '@uvodohq/planum'

export const EditorContainer = styled('div', {
  borderRadius: '$sm',
})

export const editorClass = css(subheaderCss, customScrollbar, {
  fw: '$regular',
  resize: 'vertical',
  overflow: 'auto',
  minHeight: '72px',
  maxHeight: 400,
  padding: '$8 $12',
  color: '$textDark',
  border: '1px solid $surface400',
  borderRadius: ' 0 0 4px 4px',
  transition: 'box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out',
  wordBreak: 'break-all',

  '&[contenteditable]:focus': {
    outline: 'none',
  },

  variants: {
    status: {
      normal: {
        borderColor: '$surface400',

        '&[contenteditable]:hover:not(:focus)': {
          borderColor: '$surface600',
        },

        '&[contenteditable]:focus': {
          borderColor: '$primary600',
          boxShadow: '0 0 0 3px $colors$primary100',
        },
      },

      error: {
        borderColor: '$danger700',

        '&[contenteditable]:focus': {
          boxShadow: '0 0 0 3px $colors$danger100',
        },
      },

      success: {
        borderColor: '$success700',

        '&[contenteditable]:focus': {
          boxShadow: '0 0 0 3px $colors$success100',
        },
      },
    },

    isDisabled: {
      true: {
        '&&': {
          color: '$surface500',
          borderColor: '$surface400',
          backgroundColor: '$surface100',
          boxShadow: 'none',
          disableActions: true,
        },
      },
    },
  },

  defaultVariants: {
    status: 'normal',
  },

  'ul, ol': {
    padding: '0 1rem',
    listStyleType: 'revert',
  },

  h1: {
    fontSize: '$xl',
    lineHeight: '$xs',
  },

  h2: {
    fontSize: '$lg',
    lineHeight: '$sm',
  },

  a: {
    color: '$blue500',
  },

  hr: {
    border: 'none',
    borderTop: '2px solid #0d0d0d',
    margin: '2rem 0',
  },

  'ul[data-type="taskList"]': {
    listStyle: 'none',
    padding: '0',

    p: { margin: '0' },

    li: {
      display: 'flex',

      '> label': {
        flex: '0 0 auto',
        marginRight: '0.5rem',
        userSelect: 'none',
      },

      '> div': { flex: '1 1 auto' },
    },
  },
})

export const placeholderClass = css(subheaderCss, {
  fw: '$regular',

  '&:first-of-type::before': {
    color: '$textDisabled',
    content: 'attr(data-placeholder)',
    cssFloat: 'left',
    height: '0',
    pointerEvents: 'none',
    position: 'absolute',
    disableActions: true,
  },
})
