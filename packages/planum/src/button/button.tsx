import type { AriaButtonProps } from '@react-types/button'
import type { PressEvent } from '@react-types/shared'
import type { ReactElement } from 'react'
import { Children, forwardRef } from 'react'

import Loader from '../loader'
import type { CSS } from '../theme'
import { __DEV__ } from '../utils/assertion'
import type { StyledButtonVariants } from './button.styles'
import {
  ButtonTextContent,
  ContentPlace,
  LeftIconWrapper,
  LoadingPlace,
  RightIconWrapper,
  StyledButton,
} from './button.styles'

interface CustomProps {
  /**
   * Text to display inside the button
   */
  children?: React.ReactNode

  /**
   * Left icon to display inside the button
   */
  leftIcon?: React.ReactNode

  /**
   * Left icon to display inside the button
   */
  rightIcon?: React.ReactNode

  /**
   * Middle Single Icon for IconButton
   */
  icon?: React.ReactNode
  /**
   * Stiches css styling api
   */
  css?: CSS
  /**
   * @default false
   */
  isLoading?: boolean

  as?: React.ElementType | React.ComponentType

  onClick?: (e: PressEvent) => void
}

// TODO: omit style variants from props
export type ButtonProps<T extends React.ElementType = 'button'> =
  AriaButtonProps<T> &
    StyledButtonVariants &
    CustomProps &
    React.ComponentPropsWithoutRef<T>

function _Button<T extends React.ElementType = 'button'>(
  props: ButtonProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const {
    children,
    leftIcon,
    rightIcon,
    icon,
    isLoading,
    variant,
    isDisabled,
    ...rest
  } = props

  const hasChild = Children.count(children) > 0
  const isSingleIcon = !leftIcon && !hasChild

  const content = (
    <ContentPlace
      css={{
        visibility: isLoading ? 'hidden' : 'visible',
      }}>
      {leftIcon && <LeftIconWrapper>{leftIcon}</LeftIconWrapper>}
      {icon}
      {hasChild && <ButtonTextContent>{children}</ButtonTextContent>}
      {rightIcon && <RightIconWrapper>{rightIcon}</RightIconWrapper>}
    </ContentPlace>
  )

  const loadingContent = (
    <LoadingPlace>
      <Loader />
    </LoadingPlace>
  )

  return (
    <StyledButton
      type="button" // should be default button to prevent unwanted submit within form on enter
      {...rest}
      ref={ref}
      variant={variant}
      isDisabled={isDisabled} // this is for stiches variant
      disabled={isDisabled || isLoading} // this is for native button
      isLoading={isLoading}
      aria-label={isLoading ? 'Loading' : ''}
      aria-busy={isLoading ? 'true' : 'false'}
      isIconButton={isSingleIcon}>
      {content}
      {isLoading && loadingContent}
    </StyledButton>
  )
}

// Storybook ArgsTable require export and prop types
type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T> & { ref?: React.ForwardedRef<HTMLButtonElement> },
) => ReactElement

export const Button = forwardRef(_Button) as ButtonComponent & {
  displayName?: string
}

export default Button

if (__DEV__) Button.displayName = 'Button'
