import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import type { Ref } from 'react'
import { forwardRef, useRef } from 'react'

import type { CSS } from '../theme'
import { __DEV__ } from '../utils/assertion'
import { RemoveIcon } from './remove-icon'
import {
  IconContainer,
  TagContainer,
  TagIconButton,
  TagText,
} from './tag.styles'

export interface TagProps {
  children: React.ReactNode
  /**
   * Left icon to display before the text.
   */
  leftIcon?: React.ReactNode

  /**
   * Right icon to display after the text.
   */
  rightIcon?: React.ReactNode

  /**
   * Whether the tag is removable.
   * @default true
   */
  removable?: boolean

  /**
   * Click handler for the remove button.
   */
  onRemove?: () => void

  /**
   * Align Remove Icon to the left or right.
   * @default 'right'
   */
  removeButtonAlign?: 'left' | 'right'

  css?: CSS
}

// TODO: useTag react aria hook - https://adobe-reactspectrum-9vc84wlaz6l.ws-eu53.gitpod.io/
const Tag = forwardRef((props: TagProps, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    leftIcon,
    rightIcon,
    removable = true,
    onRemove = () => {},
    removeButtonAlign = 'right',
    ...rest
  } = props

  const { hoverProps, isHovered } = useHover({})
  const removeButtonRef = useRef<HTMLButtonElement>(null)
  const { buttonProps, isPressed } = useButton(
    {
      onPress: () => onRemove(),
    },
    removeButtonRef,
  )

  const isRemoveButtonLeft = removeButtonAlign === 'left'

  const removeButton = (
    <TagIconButton
      type="button"
      aria-label="remove"
      css={{
        ml: isRemoveButtonLeft ? '-$8' : '',
        mr: !isRemoveButtonLeft ? '-$8' : '',
      }}
      {...buttonProps}
      ref={removeButtonRef}>
      <IconContainer isPressed={isPressed} isHovered={isHovered}>
        <RemoveIcon />
      </IconContainer>
    </TagIconButton>
  )

  return (
    <TagContainer {...rest} {...hoverProps} ref={ref}>
      {removable && isRemoveButtonLeft && removeButton}

      {leftIcon && (
        <IconContainer
          css={{ ml: '-$8' }}
          isPressed={isPressed}
          isHovered={isHovered}>
          {leftIcon}
        </IconContainer>
      )}

      <TagText>{children}</TagText>

      {rightIcon && (
        <IconContainer
          css={{ mr: '-$8' }}
          isPressed={isPressed}
          isHovered={isHovered}>
          {rightIcon}
        </IconContainer>
      )}
      {removable && !isRemoveButtonLeft && removeButton}
    </TagContainer>
  )
})

export default Tag

if (__DEV__) Tag.displayName = 'Tag'
