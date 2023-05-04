/* eslint-disable react/no-children-prop */
import type { ButtonProps } from '@uvodohq/planum'
import { Box, Button, Flex, Spacer, styled } from '@uvodohq/planum'

const StyledFooter = styled('div', {
  p: '$32',
  pb: 0,
  dflex: 'center',
  justifyContent: 'space-between',
})

export interface FooterProps {
  okButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  onSubmit?: () => void
  onCancel?: () => void
  onRemoveLink?: () => void
  isEditLink: boolean
}

export const DialogFooter = (props: FooterProps) => {
  const {
    okButtonProps,
    cancelButtonProps,
    onSubmit,
    onCancel,
    isEditLink,
    onRemoveLink,
  } = props

  return (
    <StyledFooter>
      <Box>
        {isEditLink ? (
          <Button variant={'secondaryDanger'} onClick={onRemoveLink}>
            Remove link
          </Button>
        ) : null}
      </Box>
      <Flex>
        <Button
          onClick={onCancel}
          variant="secondary"
          children="Cancel"
          {...cancelButtonProps}
        />
        <Spacer x="$16" />

        <Button onClick={onSubmit} children="Save" {...okButtonProps} />
      </Flex>
    </StyledFooter>
  )
}
