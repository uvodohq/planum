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
  } = props

  const labelText = label || children
  const hasLabel = !!labelText

  const markIcon = isIndeterminate ? (
    <StyledIndicator>
      <MinusIcon />
    </StyledIndicator>
  ) : (
    <StyledIndicator>
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
        {...pressProps}>
        {markIcon}
      </StyledCheckbox>

      {hasLabel && <Paragraph css={{ m: 0, ml: 10 }}>{labelText}</Paragraph>}
    </StyledLabel>
  )
}
