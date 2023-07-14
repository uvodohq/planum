// TODO: add hover state and fx types, forward ref, group
import { mergeProps } from '@react-aria/utils'
import { VisuallyHidden } from '@react-aria/visually-hidden'

import { Paragraph } from '../text'
import { StyledCheckbox, StyledIndicator, StyledLabel } from './checkbox.styles'
import { CheckIcon, MinusIcon } from './icons'
import type { CheckboxBaseProps } from './type'

export function CheckboxBase(props: CheckboxBaseProps) {
  const {
    isDisabled,
    isIndeterminate,
    isSelected,
    isFocusVisible,
    label,
    pressProps,
    inputProps,
    focusProps,
    children,
    inputRef,
    containerCss,
    css,
  } = props

  const labelText = label || children
  const hasLabel = !!labelText

  const markIcon = isIndeterminate ? (
    <StyledIndicator css={css}>
      <MinusIcon />
    </StyledIndicator>
  ) : (
    <StyledIndicator css={css}>
      <CheckIcon isSelected={isSelected} />
    </StyledIndicator>
  )

  return (
    <StyledLabel isDisabled={isDisabled}>
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={inputRef} />
      </VisuallyHidden>

      <StyledCheckbox
        isSelected={isSelected}
        isFocusVisible={isFocusVisible}
        isDisabled={isDisabled}
        isIndeterminate={isIndeterminate}
        css={containerCss}
        {...pressProps}>
        {markIcon}
      </StyledCheckbox>

      {hasLabel &&
        (typeof labelText === 'string' ? (
          <Paragraph css={{ ml: 10 }}>{labelText}</Paragraph>
        ) : (
          labelText
        ))}
    </StyledLabel>
  )
}
