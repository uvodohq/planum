import type { ReactElement } from 'react'
import { Children, forwardRef } from 'react'
import * as React from 'react'

import { Loader } from '../loader'
import { __DEV__ } from '../utils/assertion'
import {
  ButtonTextContent,
  ContentPlace,
  LeftIconWrapper,
  LoadingPlace,
  RightIconWrapper,
  StyledButton,
} from './button.styles'
import type { ButtonProps } from './button.type'

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
      isDisabled={isDisabled} // this is for stitches variant
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

if (__DEV__) Button.displayName = 'Button'
